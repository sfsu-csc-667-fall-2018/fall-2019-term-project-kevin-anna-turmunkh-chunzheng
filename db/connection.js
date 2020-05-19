const pgp = require('pg-promise')();
process.env.DATABASE_URL='postgres://postgres:1@localhost:5432/test'
const connection = pgp(process.env.DATABASE_URL);

module.exports = connection;