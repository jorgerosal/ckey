const dotenv = require('dotenv').config({ path: require('find-config')('.env') });

dotenv.load();

module.exports = process.env;
