const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config()

const app = express();
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', __dirname + '/templates')


app.get('/', (req, res, next) => {
    res.render('views/products/index', {})
})

app.use((req,res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.render('views/products/error')
})

app.listen(process.env.PORT, () => {
    console.log(`Express server running on port: ${process.env.PORT}`)
})