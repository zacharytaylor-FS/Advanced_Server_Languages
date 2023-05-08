const express = require('express');
const app = express();

express.urlencoded({extended: true})

app.get('/', (req, res) => {
    res.send(`Welcome to the HOME PAGE GET`)
})

app.post('/', (req, res, next) => {
    res.send(`Home Page POST`)
})

app.get('/products/all', (req, res) => {
    res.send(`GET Products: ${req.get('Page')}, ${req.get('Sort')}, ${req.get('Order')}`)
})

app.get('/products/:productId-:productSize-:productColor', (req, res) => {
    const id = 
    res.send(`GET Products: Id - ${req.params.productId}, Size - ${req.params.productSize}, Color - ${req.params.productColor}`)
})

app.get('/products/:id', (req, res) => {
    res.send(`GET Products: ${req.params.id}`)
})

app.get(/^\/pages\/([0-9].*)/, (req, res) => {
    res.send('Page: ' + req.params.pageId)
})

app.listen(3000)