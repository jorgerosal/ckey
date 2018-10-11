const dotenv = require('dotenv').config({ path: require('find-config')('.env') });

module.exports = process.env;
