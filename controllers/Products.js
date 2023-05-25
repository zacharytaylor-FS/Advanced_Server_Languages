/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
 */
const Products = require('../models/Products')

const index = (req, res) => {
    const products =  Products.all()
    res.render('views/products/index.pug', {
        title: 'Home',
        products
    }).json(products)
};

const form = (req, res) => {
    const id = (typeof req.params.id !== "undefined") ? Number(req.params.id) : false
    if (req.params.id) {
        const product = Products.find(id)
    // res.json(product)
    res.render('views/products/edit.pug', {product, id})
} else {
    res.render('views/products/create.pug')

}
};
const show = (req, res) => {
    const productId = Number(req.params.id)
    let product = Products.find((r) => r.id === req.params.id)
    res.render('views/products/show.pug', {'product': product ,title: 'About', productId})
};
const create = (req, res) => {
    const product = Products.create(req.body)
    // res.json(product)
    res.redirect('/products' )
};
const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    // res.json(product)
    res.redirect('/products' + product.id)

};
const remove = (req, res) => {
    const product = Products.remove(req.params.id)
    // res.json(products)
    res.render('views/products/show.pug')
};



module.exports = {index, create, form, update, show, remove}