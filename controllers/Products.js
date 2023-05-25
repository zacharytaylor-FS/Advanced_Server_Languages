/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
 */
const { Product } = require('../models')

const index = async (req, res) => {
    const products = await Product.findAll()
    res.render('views/products/index.pug', {
        title: 'Home',
        products 
    })
    // res.json(products)
};

const form = async (req, res) => {
    const id = (typeof req.params.id !== "undefined") ? Number(req.params.id) : false
if (req.params.id) {
    const product = await Product.findByPk(id)
    // res.json(product)
    res.render('views/products/edit.pug', {product})
} else {
    res.render('views/products/create.pug')

}
};

const show = async (req, res) => {
    const productId = Number(req.params.id)
    const product = await Product.findByPk(req.params.id)
    res.render('views/products/show.pug', {product})
};

const create = async (req, res) => {
    const product = await Product.create(req.body)
    res.json(product)
    // res.redirect('/products/' + product.id)
};
const update = async (req, res) => {
    const product = await Product.update(req.body, {
        where: { id: req.params.id }
    })
    // res.json(product)
    res.redirect('/products/' + req.params.id)

};
const remove = async (req, res) => {
    const products = await Product.destroy({where : {id: req.params.id}})
    // res.json(products)
    res.redirect('/products')
};



module.exports = {index, create, form, update, show, remove}