// Connection to database
const mongoose = require('mongoose');

const URL = 'mongodb+srv://jhon:19870805jhon@cluster0-enqfy.mongodb.net/test?retryWrites=true';
// const URL = 'mongodb://localhost/spaces';

mongoose.connect(URL, {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;