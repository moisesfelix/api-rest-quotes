const result = require('dotenv').config()

if (result.error) {
 
  throw result.error
  
}


const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectBD = require('./configs/db') //require('./database')

connectBD()

const app = express()

// Log request data
app.use(morgan('dev'))

// Setup static files path
app.use('../uploads', express.static('uploads'))

// Use body parser middleware to parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Setup CORS
app.use(cors({}))

/* OLD CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

*/


/*
const orderRoutes = require('./api/routes/orders');


// Routes which should handle requests
app.use('/orders', orderRoutes);
*/
const userRoutes = require('./routes/user')
const quoteRoutes = require('./routes/quote')
app.use('/users', userRoutes)
app.use('/quote', quoteRoutes);

// Handle Error Requests
app.use((req, res, next) => {
    const error = new Error();
    error.message = 'Not Found';
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: error,
        msg:'erro interno'
    });
});

/* 
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});
*/

module.exports = app