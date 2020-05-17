const db = require('./connection.js')

const createUser = (username, password) =>  
    db.one("INSERT INTO users (username, password) VALUES($1, $2) RETURNING id, username", [username, password])

const findByID = id => 
    db.one("SELECT id, username, created_at FROM users WHERE id=$1", [id])

const findPasswordByUsername = username => 
    db.any("SELECT password FROM users WHERE username=$1", [username])
      .then(rows => {
          if (rows.length !== 1) {
            return Promise.reject('Invalid credentials!');
          } else {
            return rows[0];
          }
      })

const findByUsernameAndPassword = (username, password) => 
    db.one("SELECT id, username, created_at FROM users WHERE username=${username} and password=${password}", { username, password })

module.exports = {
    createUser,
    findByID,
    findPasswordByUsername,
    findByUsernameAndPassword
};