require('dotenv').config();

let PORT = process.env.PORT;
let NODE_ENV = process.env.NODE_ENV;

//MongoDB configurations
let MONGO_URL = process.env.MONGO_URL;
let MONGO_PASSWORD = process.env.MONGO_PASSWORD;
let MONGO_USERNAME = process.env.MONGO_USERNAME;

module.exports = {
    PORT,
    NODE_ENV,

    MONGO_URL, 
    MONGO_PASSWORD, 
    MONGO_USERNAME
};