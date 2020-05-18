var fetch = require('node-fetch')


fetch('http://localhost:3000/chess/new')
.then(res => res.text())
.then(rs => console.log(rs))