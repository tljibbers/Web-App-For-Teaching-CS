import { databaseConnect } from './connect-env.js';
import express from 'express';
import session from 'express-session'
import cors from 'cors'

console.log('working')
let dbHolder;

const app = express()

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.use(express.json())

app.use(session({
    secret: 'sfddafdsafdasfds',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 50,
        httpOnly: true,
        secure: false}
}));

app.post('/accountInfo', async (req, res) => {
    try{
        console.log('POST /accountInfo was reached!');
        console.log('Request body:', req.body);
        const {name, lastName, email, userName, password, totalLessonsCompleteITP, totalLessonsCompleteDSA, lessonCompleteITP, lessonCompleteDSA} = req.body

        const collection = dbHolder.collection('accounts')

        const newUser = {name, lastName, email, userName, password, totalLessonsCompleteITP, totalLessonsCompleteDSA, lessonCompleteITP, lessonCompleteDSA};
        const result = await collection.insertOne(newUser);

        req.session.user = {
            userSignedIn: true,
            userName : newUser.userName,
            userLessonsCompleteITP : newUser.totalLessonsCompleteITP,
            userLessonsCompleteDSA : newUser.totalLessonsCompleteDSA
        }

        req.session.save((error) => {
            if(error) {
                console.error('Session had a problem saving:', error);
                return res.status(500).json({
                    error: 'Failed to save'
                })
            }

            res.status(201).json({
                message: 'Account Created!',
                insertedId: result.insertedId
            })
        });


    } catch (error){
        console.error('Failed:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
    
})

app.post('/logIn', async (req, res) => {
    try{
        console.log('POST /logIn was reached!');
        const {userName, password} = req.body
        const collection = dbHolder.collection('accounts')

        const userSearch = await collection.findOne({
            userName: userName,
            password: password

        });

        if(!userSearch) {
            console.log('Incorrect username or password')

            return res.status(401).json({
                success: false,
                message: 'Incorrect username or password'
            })
        }

        req.session.user = {
            userSignedIn: true,
            userName: userSearch.userName,
            userLessonsCompleteITP : userSearch.totalLessonsCompleteITP,
            userLessonsCompleteDSA : userSearch.totalLessonsCompleteDSA
        }

        req.session.save((error) => {
            if(error) {
                console.error('Session had a problem saving:', error)
                return res.status(500).json({
                    error: 'Failed to save'
                })
            }

            console.log('User is signed in')

            return res.status(200).json({
                success: true,
                message: 'Login Successful',
                userSignedIn: true,
                userName: userSearch.userName,
                userLessonsCompleteITP : userSearch.totalLessonsCompleteITP,
                userLessonsCompleteDSA : userSearch.totalLessonsCompleteDSA
            })
        })

    } catch (error){
        console.error('Failed:', error);
        
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
})

app.post('/logOut', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.status(500).send('There was an error logging out.')
        }

        res.clearCookie('connect.sid');

        res.send('Successful logout.')
    })
})

app.post('/lessonComplete', async (req, res) => {
    try{
        const {lessonTitle, whatSubjectType} = req.body

        if (!lessonTitle || !['ITP', 'DSA'].includes(whatSubjectType)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid lesson title or subject type'
            })
        }
        const collection = dbHolder.collection('accounts')

        const userSearch = await collection.findOne({
            userName: req.session.user.userName
        })

        if(!userSearch)
        {
           return res.status(401).json({
                success: false,
                message: 'User Is Not Listed'
            })
        }

        const subject = `lessonComplete${whatSubjectType}`
        let totalCount = `totalLessonsComplete${whatSubjectType}`
        const lessonPath = `${subject}.${lessonTitle}`

        const checkForCompletion = userSearch[subject]?.[lessonTitle] === true;

        let totalCountNum = userSearch[totalCount] || 0

        

        if(checkForCompletion) {
            totalCountNum = Math.max(0, totalCountNum - 1)
        }
        else{
            totalCountNum = totalCountNum + 1;
        }

        await collection.updateOne(
            { _id: userSearch._id},
            {
                $set: {
                    [lessonPath]: !checkForCompletion,
                    [totalCount]: totalCountNum
                }
            }
        )

        return res.status(200).json({
            success: true,
            message: checkForCompletion
                ? 'Lesson was completed'
                : 'Lesson marked as complete',
                lessonTitle,
                whatSubjectType
        })


    }catch (error){
        console.error('Error completing lesson:', error);

        return res.status(500).json({
            success: false,
            message: 'An error occured when trying to finish the lesson.'
        })
    }
})


app.get('/api/session', (req, res) => {
    res.json({
        userSignedIn: Boolean(req.session.user?.userSignedIn),
        userName: req.session.user?.userName ?? null,
        userLessonsCompleteITP: req.session.user?.userLessonsCompleteITP ?? null,
        userLessonsCompleteDSA: req.session.user?.userLessonsCompleteDSA ?? null
    })
})

app.get('/api/progressValues', async (req, res) => {
    try {
        
        const userName = req.session.user?.userName;

        if(!userName) {
            return res.status(401).json({
                success: false,
                message: 'User is not signed in'
            })
        }

        const collection = dbHolder.collection('accounts')
        const userSearch = await collection.findOne({
            userName: req.session.user.userName
        })

        if(!userSearch)
        {
            return res.status(401).json({
                success: false,
                messgae: 'User is Not Listed'
            })
        }

        let totalCountITP = userSearch.totalLessonsCompleteITP ?? 0;
        let totalCountDSA = userSearch.totalLessonsCompleteDSA ?? 0;

      

        res.json({
            totalCountITPNum : totalCountITP,
            totalCountDSANum : totalCountDSA, 

            isLessonCompleteITP: userSearch.lessonCompleteITP ?? {},
            isLessonCompleteDSA: userSearch.lessonCompleteDSA ?? {}

        })
    }catch (error){
        return res.status(500).json({
            success: false,
            message: 'An error occured when getting the values'
        })
    }
})





async function serverStart() {
    try {
        dbHolder = await databaseConnect()
        console.log(dbHolder)

        app.listen(3000, () => {
            console.log('started')
        });
        
    } catch (error) {
        console.error('Failed:', error);
    }
}

serverStart();