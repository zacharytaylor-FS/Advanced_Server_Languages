const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res, next) => {
    res.render('index', {
        
    })
})

app.listen(8080, () => {
    console.log('Express server running on port: 8080')
})