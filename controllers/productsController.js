/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
*/
const { Product } = require('../models')

const index = async (req, res, next) => {
    const products = await Product.findAll()
    console.log(products)
    if (products === null) {
        const err = new Error("Product not found")
        err.status = 404;
        return next(err)
    }
    // res.json(products)
    res.render('views/products/index.pug', {
        title: 'Products Page',
        products
    })
};

const form = async (req, res) => {
    if (req.params.id) {
        const product = await Product.findByPk(req.params.id)
        // res.json(product)
        res.render('views/products/edit.pug', {product})
    } else {
        res.render('views/products/create.pug')
    }
};

const show = async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    res.render('views/products/show.pug', {product})
};

const create = async (req, res) => {
    const product = await Product.create(req.body)
    res.redirect('/products/' + product.id)
    // res.json(product)
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