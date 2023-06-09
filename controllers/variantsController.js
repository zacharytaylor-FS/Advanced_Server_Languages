/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
*/
const { Variant, Product } = require('../models')

const index = async (req, res) => {
    const variants = await Variant.findAll()
    res.render('views/variants/index.pug', {
        title: 'Variant Index Page',
        variants, 
    })
};

const form = async (req, res) => {
    const products = Product.findAll()
    if (req.params.id) {
        const variant = await Variant.findByPk(req.params.id)
        // res.json(variant)
        res.render('views/variants/edit.pug', {variant, products})
    } else {
        res.render('views/variants/create.pug', {products})
    }
};

const show = async (req, res) => {
    const variant = await Variant.findByPk(req.params.id)
    const product = await variant.getProduct()
    res.render('views/variants/show.pug', {variant, product})
};

const create = async (req, res) => {
    const variant = await Variant.create(req.body)
    // res.json(variant)
    res.redirect('/variants/' + variant.id)
};


const update = async (req, res) => {
    const variant = await Variant.update(req.body, {
        where: { id: req.params.id }
    })
    // res.json(variant)
    res.redirect('/variants/' + req.params.id)

};
const remove = async (req, res) => {
    const variants = await Variant.destroy({where : {id: req.params.id}})
    // res.json(variants)
    res.redirect('/variants')
};



module.exports = {index, create, form, update, show, remove}