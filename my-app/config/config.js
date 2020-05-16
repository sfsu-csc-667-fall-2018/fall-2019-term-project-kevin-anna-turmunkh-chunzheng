require('dotenv').config();

module.exports = {
    "development": {
        "DATABASE_URL": "",
        "dialect": "postgres"
    },
    "test": {
        "DATABASE_URL": "",
        "dialect": "postgres"
    },
    "production": {
        "DATABASE_URL": "postgres://lddhpjwfdopxhw:00c0abd4345642c340180f20da78ad882ce31a58c988a7fb8fd340f0be5c595b@ec2-18-233-32-61.compute-1.amazonaws.com:5432/d93a2at8ega71r",
        "dialect": "postgres"
    },
    "cyang_secret_env":{
        "DATABASE_URL": "postgres://postgres:1@localhost:5432/test",
        "dialect": "postgres"
    }
}