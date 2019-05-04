// Server configuration
const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
require('./db');

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', require('../routes/service.routes'));

// init server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});