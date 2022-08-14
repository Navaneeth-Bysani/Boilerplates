const app = require('./app.js');
const dotenv = require('dotenv');
const config = require('./utils/config');
const mongoose = require('mongoose');

process.on('uncaughtException',  err => {
    console.log('UNCAUGHT EXCEPTION!!! Shutting the server down');
    console.log(err.name, err.message);
    process.exit(1);
})

dotenv.config();

const PORT = config.PORT || 3000;

const MONGODB_URI = config.MONGO_URL.replace('<password>', config.MONGO_PASSWORD);

mongoose.connect(MONGODB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
})

const server = app.listen(PORT, () => {
    console.log(`App Running on Port - ${PORT}`);
})

process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection!! Shutting Down the server....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    })
})