const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('create a connection')
    res.end('aaaaa')
}).listen(8080)