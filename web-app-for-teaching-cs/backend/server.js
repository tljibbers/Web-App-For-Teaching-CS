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
            userSignedIn: true
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

app.get('/api/session', (req, res) => {
    res.json({
        userSignedIn: Boolean(req.session.user?.userSignedIn)
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