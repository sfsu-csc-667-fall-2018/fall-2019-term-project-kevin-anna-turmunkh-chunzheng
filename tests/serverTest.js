const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.end('aaaaa')
}).listen(8080)