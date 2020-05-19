var express = require('express');
var router = express.Router();
const db = require('../db');
const table = 'ingame'

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/position', function(req, res, next) {
    db.any(`SELECT position FROM ${table} where game_id = (select game_id from ${table} where game_id = (select max(game_id) from ${table}))`)
    .then(r => res.end(r))
    .catch(error => {
        console.log(error)
        res.json({ error })
    })
});

router.post('/position', jsonParser, function(req, res, next) {
    let {position} = req.body
    db.any(`UPDATE ${table} SET position = '${position}' where game_id = (select game_id from ${table} where game_id = (select max(game_id) from ${table}))`)
      .then(r => res.end('successful'))
      .catch(error => {
          console.log(error)
          res.json({ error })
      })
});

module.exports = router;
