const express = require('express')
const router = express.Router()
const passport = require('../authentication')
const bcrypt = require('bcrypt');
const Users = require('../db').Users;

router.get('/login', (request, response) => {
  const message = request.flash('error')

  response.render('login', { message })
})

router.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/users/login',
    failureFlash: true
  }),
  (_, response) => response.redirect('/lobby')
)

router.get('/logout', (request, response) => {
  request.logout()
  response.redirect('/')
})

router.get('/signup', (_, response) => {
  response.render('signup', { message: [] })
})

router.post('/signup', (request, response) => {
  const { username, password } = request.body

  bcrypt.hash(password, 10)
    .then(hashedPassword => Users.createUser(username, hashedPassword))
    .then(user => {
      request.login({ id: user.id }, error => {
        if (error != null) {
          console.log(error)
          response.render('login', { message: ['An error occurred when trying to log you in.'] })
        } else {
          response.redirect('/lobby');
        }
      })
    })
    .catch(error => {
      console.log(error)
      response.render('signup', { message: ['Something bad happened.' + error] })
    })
})

module.exports = router