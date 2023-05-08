/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
 */
const Products = require('../models/Products')

const index = (req, res) => {
    const products = Products.all()
    res.json(products)
};

const show = (req, res) => {
    const products = Products.find(req.params.id)
    res.json(products)
};
const create = (req, res) => {
    const product = Products.create(req.body)
    res.json(product)
};
const form = (req, res) => {
    res.send('Product.form')
};
const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.json(product)
};
const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    // res.json(products)
};



module.exports = {index, create, form, update, show, remove}