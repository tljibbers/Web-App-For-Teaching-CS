import express from 'express';
console.log('test')

const app = express()

app.get('/', (req, res) => {
    console.log('Here')
    res.send("hello")
})

app.listen(3000)