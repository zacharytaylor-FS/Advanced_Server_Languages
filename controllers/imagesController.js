/** Controller
 * * The controller interacts with the model and serves the response and functionality to the view.ssd
 * * ROUTES to call on DB 
 * * require Model
*/
const { Image } = require('../models')

const index = async (req, res) => {
    // const images = await Image.findAll()
    res.render('views/images/index.pug', {
        title: 'Images Home',
        // images 
    })
    // res.json(images)
};

const form = async (req, res) => {
    const id = (typeof req.params.id !== "undefined") ? Number(req.params.id) : false
if (req.params.id) {
    const image = await Image.findByPk(id)
    // res.json(image)
    res.render('views/images/edit.pug', {image})
} else {
    res.render('views/images/create.pug')

}
};

const show = async (req, res) => {
    const imageId = Number(req.params.id)
    const image = await Image.findByPk(req.params.id)
    res.render('views/images/show.pug', {image})
};

const create = async (req, res) => {
    const image = await Image.create(req.body)
    // res.json(image)
    res.redirect('/images/' + image.id)
};


const update = async (req, res) => {
    const image = await Image.update(req.body, {
        where: { id: req.params.id }
    })
    // res.json(image)
    res.redirect('/images/' + req.params.id)

};
const remove = async (req, res) => {
    const images = await Image.destroy({where : {id: req.params.id}})
    // res.json(images)
    res.redirect('/images')
};



module.exports = {index, create, form, update, show, remove}