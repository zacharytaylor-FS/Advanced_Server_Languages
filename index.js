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

//* Catch 404
app.use((req, res, next) => {
   next(createError(404))
})

//* Error Handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};


    res.status(err.status || 500);
    res.render('views/products/error', {})
})

app.listen(8080, () => {
    console.log('Express server running on port: 8080')
})