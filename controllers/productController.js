/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
*/
const { Product } = require('../models')

exports.index = async (req, res) => {
    const products = await Product.all()
    res.render('views/products/index.pug', {
        products
    }).json(products)
};

const form = async (req, res) => {
    const id = (typeof req.params.id !== "undefined") ? Number(req.params.id) : false
if (req.params.id) {
    const product = await Product.find(id)
    // res.json(product)
    res.render('views/products/edit.pug', {product, id})
} else {
    res.render('views/products/create.pug')

}
};

const show = async (req, res) => {
    const productId = Number(req.params.id)
    let product = await Product.find((r) => r.id === productId)
    res.render('views/products/show.pug', {product})
};

const create = async (req, res) => {
    const product = await Product.create(req.body)
    // res.json(product)
    res.redirect('/products/' + product.id)
};


const update = async (req, res) => {
    const product = await Product.update(req.params.id, req.body)
    // res.json(product)
    res.redirect('/products/' + req.params.id)

};
const remove = async (req, res) => {
    const product = await Product.remove(req.params.id)
    // res.json(products)
    res.redirect('/products')
};



module.exports = {index, create, form, update, show, remove}