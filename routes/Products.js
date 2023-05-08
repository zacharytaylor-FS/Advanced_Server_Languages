const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/Products')

//TODO SHOW ALL
router.get('/', productCtrl.index)
//TODO CREATE
router.get('/new', productCtrl.form)
//TODO SHOW BY ID
router.get('/:id', productCtrl.show)

//TODO EDIT BY ID
//TODO PREPOPULATED
router.get('/:id/edit', productCtrl.form)

//TODO CREATE NEW CONTEXT NO ID
router.post('/', productCtrl.create)
//TODO UPDATE W/ ID
router.post('/:id', productCtrl.update)
//TODO REMOVE W/ ID
router.delete('/:id', productCtrl.remove)
router.post('/:id/delete', productCtrl.remove)


module.exports = router