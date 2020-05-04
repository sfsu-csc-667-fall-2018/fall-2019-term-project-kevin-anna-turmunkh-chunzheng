const pgp = require('pg-promise')();

process.env.DATABASE_URL = "postgres://turmunkhnergui@localhost:5432/my-app";
console.log(process.env.DATABASE_URL);

const connection = pgp(process.env.DATABASE_URL);
module.exports = connection;