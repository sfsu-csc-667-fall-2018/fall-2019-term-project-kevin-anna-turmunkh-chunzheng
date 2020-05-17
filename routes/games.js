const express = require('express')
const router = express.Router()

router.get('/', function (request, response) {
  response.render('game')
})

router.post('/lobby', (request, response) => {
  const user = request;
  const err = request.query.error;
  
  response.render('lobby', {user: user, error: err})
});

module.exports = router