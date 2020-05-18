var fetch = require('node-fetch')


fetch('http://localhost:3000/chess/position',

{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        gameId : 4,
        chess: 'wht_queen',
        position : 'e7'
    })
})
.then(res => res.text())
.then(rs => console.log(rs))


