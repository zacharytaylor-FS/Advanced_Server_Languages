const express = require('express');
const app = express();

express.urlencoded({extended: true})


app.get('/products/all', (req, res) => {
    res.send(`GET Products: ${req.get('Page')}, ${req.get('Sort')}, ${req.get('Order')}`)
})

app.get('/products/:id-:size-:color', (req, res) => {
    const id = 
    res.send(`GET Products: ${req.params.id}, ${req.params.size}, ${req.params.color}`)
})

app.get('/products/:id', (req, res) => {
    res.send(`GET Products: ${req.params.id}`)
})


app.listen(3000)