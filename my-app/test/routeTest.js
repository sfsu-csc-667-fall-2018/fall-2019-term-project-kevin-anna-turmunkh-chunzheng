const express = require('express')
const router = express.Router()

const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
console.log(config)
const url = config.DATABASE_URL
//const db = require('../db')
const table = 'game'

const pgp = require('pg-promise')()

const db = pgp(url)


db.any(`SELECT MAX(id) FROM ${table}`)
    //.then(_ => db.any(`SELECT * FROM ${table}`))
    //.then(results => JSON.parse(results))
    .then(r => console.log(r[0]['max']))
    .catch(error => {
        console.log(error)
        res.json({ error })
    })

// router.get('/', (req, res)=>{
//     db.any(`INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`)
//         .then(_=> db.any(`SELECT * FROM test_table`))
//         .then(results => res.json(results))
//         .catch(err => {
//             console.log(err)
//             res.json({err})
//         })
// })

module.exports = router