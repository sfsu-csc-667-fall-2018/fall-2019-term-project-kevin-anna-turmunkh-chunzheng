var express = require('express');
var router = express.Router();
const db = require('../db');
const table = 'game'

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/new', function(req, res, next) {
    db.any(`SELECT MAX(id) FROM ${table}`)
      .then(r => r[0]['max'] + 1)
      .then(newId => {
          db.any(`INSERT INTO ${table} (id) VALUES (${newId})`)
          res.end(`${newId}`)
      })
      .catch(error => {
        console.log(error)
        res.json({ error })
    })
});

router.post('/position', jsonParser, function(req, res, next) {
    let {gameId, chess, position} = req.body
    db.any(`UPDATE ${table} SET ${chess} = '${position}' where id = ${gameId}`)
      .then(r => res.end('successful'))
      .catch(error => {
          console.log(error)
          res.json({ error })
      })
});

module.exports = router;
