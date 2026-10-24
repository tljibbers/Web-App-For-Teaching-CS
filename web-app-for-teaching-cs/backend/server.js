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
        const {name, lastName, email, userName, password} = req.body

        const collection = dbHolder.collection('accounts')

        const newUser = {name, lastName, email, userName, password};
        const result = await collection.insertOne(newUser);

        req.session.user = {
            userSignedIn: true,
            userName : newUser.userName
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
        console.log(userName)

        //const userLoginDetails = {userName, password}
        const collection = dbHolder.collection('accounts')
        const userSearch = await collection.findOne({
            userName: userName,
            password: password

        });

        if(userSearch)
        {
            req.session.user = {
                userSignedIn: true,
                userName: userSearch.userName
            }
            console.log('User is signed in!')

            req.session.save((error) => {
            if(error) {
                console.error('Session had a problem saving:', error);
                return res.status(500).json({
                    error: 'Failed to save'
                })
            }
        });
        }
        else {
            console.log('Wrong Password')
        }
    } catch (error){
        console.error('Failed:', error);
        res.status(500).json({error: 'Internal Server Error'})
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


app.get('/api/session', (req, res) => {
    res.json({
        userSignedIn: Boolean(req.session.user?.userSignedIn),
        userName: req.session.user?.userName ?? null
    })
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