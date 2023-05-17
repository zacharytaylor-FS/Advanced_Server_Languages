const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'))

app.set('view engine', 'pug')

app.set('views', __dirname + '/templates')

app.get('/', (req, res, next) => {
    res.render('views/products/index', {})
})

app.listen(8080, () => {
    console.log('Express server running on port: 8080')
})