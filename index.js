'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
app.use(bodyParser.urlencoded({extended: false}))
const productRouter = require('./routes/Products')
require('dotenv').config()
 
app.use(morgan('dev'))

app.use('/products', productRouter)

app.listen(process.env.PORT, function(err) {
    if (err) console.error(err);
    console.log(`App Listening on port ${process.env.PORT}`)
})