const express = require('express')


express().get('/',(req,res)=>{
            console.log('create a connection')
            res.end('aaaaa')
         })
         .listen(process.env.PORT||80)