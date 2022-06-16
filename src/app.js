const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send({
        "message": "Ok",
        "status": 200
    })
})

app.post('/api/login', (req,res)=> {
    
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000/')
})