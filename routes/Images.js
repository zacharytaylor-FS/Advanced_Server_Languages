const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/imagesController')

//* SHOW ALL
router.get('/', imageCtrl.index)
//* CREATE
router.get('/new', imageCtrl.form)
//* SHOW BY ID
router.get('/:id', imageCtrl.show)
//* EDIT BY ID
router.get('/:id/edit', imageCtrl.form)
//* CREATE NEW CONTEXT NO ID
router.post('/', imageCtrl.create)
//* UPDATE W/ ID
router.post('/:id', imageCtrl.update)
//* REMOVE W/ ID
router.delete('/:id', imageCtrl.remove)
router.get('/:id/delete', imageCtrl.remove)

module.exports = router


