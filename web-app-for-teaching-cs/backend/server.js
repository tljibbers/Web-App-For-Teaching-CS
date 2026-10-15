import express from 'express';
import cors from 'cors'
console.log('test')


const app = express()

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

app.post('/accountInfo', (req, res) => {
    console.log('POST /accountInfo was reached!');
    console.log('Request body:', req.body);
    const {name, lastName, email, userName, password} = req.body

    console.log('Test: ', name, lastName, email, userName, password)
    res.json({message: 'works great'})
})

app.listen(3000)