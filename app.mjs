import express from 'express';
const app = express();

app.get('/', (req,res) =>{
    res.send('HTTPS IN EXPRESS JS')
})

app.get('/fruit', (req,res) =>{
    res.send('Tomato is not a fruit')
})

export default app;