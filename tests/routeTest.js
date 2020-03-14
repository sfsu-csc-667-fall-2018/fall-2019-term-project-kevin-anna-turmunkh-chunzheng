const express = require('express')
const router = expree.Router()
const db = require('../db')

router.get('/', (req, res)=>{
    db.any(`INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`)
        .then(_=> db.any(`SELECT * FROM test_table`))
        .then(results => res.json(results))
        .catch(err => {
            console.log(err)
            res.json({err})
        })
})

module.exports = router