const pgp = require('pg-promise')()
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const url = config.DATABASE_URL

const connection = pgp(url)


module.exports = connection