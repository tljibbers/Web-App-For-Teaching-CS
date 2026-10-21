import { databaseConnect } from './connect-env.js';
import express from 'express';
import cors from 'cors'

console.log('working')
let dbHolder;

const app = express()

databaseConnect()

app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Here')
    res.send("hello")
})

app.get('/accountInfo', (req, res) => {
    res.json({message: "recieved"})
})

app.post('/accountInfo', async (req, res) => {
    try{
        console.log('POST /accountInfo was reached!');
        console.log('Request body:', req.body);
        const {name, lastName, email, userName, password} = req.body

        const collection = dbHolder.collection('accounts')

        const newUser = {name, lastName, email, userName, password};
        const result = await collection.insertOne(newUser);

        res.status(201).json({
            message: 'Account Created!',
            insertedId: result.insertedId
        })

    } catch (error){
        console.error('Failed:', error);
        res.status(500).json({error: 'Internal Server Error'});
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