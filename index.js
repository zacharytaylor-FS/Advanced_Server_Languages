const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config()

const productsRouter = require('./routes/Products')
const variantRouter = require('./routes/Variants')
const imagesRouter = require('./routes/Images')

const app = express();

//* View engine setup
app.set('views', path.join(__dirname + '/templates'))
app.set('view engine', 'pug')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res,next) => {
    res.render('views/home.pug')
})
app.use('/products', productsRouter)
app.use('/variants', variantRouter)
app.use('/images', imagesRouter)

app.use((req,res, next) => {
    const err = new Error('Sorry, not found')
    err.status = 404
    next(err)
})

//! Error Handler
app.use((err, req, res, next) => {

    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //* render error page
    res.status(err.status || 500)
    render('views/products/error.pug', {
        err
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Express server running on port: ${process.env.PORT}`)
})