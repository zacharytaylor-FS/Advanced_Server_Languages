const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'pug')
app.set('views', '/templates')

app.get('/', (req, res, next) => {
    res.render('home', {
        
    })
})

app.listen(8080, () => {
    app.cre
})