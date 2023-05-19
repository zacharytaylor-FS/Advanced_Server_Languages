const express = require('express');
const path = require('path');
const morgan = require('morgan');
const productsRouter = require('./routes/Products')
require('dotenv').config()

const app = express();
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname + '/templates'))


app.use('/products', productsRouter)

app.use((req,res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).render('views/products/error', {
        err
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Express server running on port: ${process.env.PORT}`)
})