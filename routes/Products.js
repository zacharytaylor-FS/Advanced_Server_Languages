const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productsController')

//* CREATE
router.get('/new', productCtrl.form)
//* SHOW ALL
router.get('/', productCtrl.index)
//* CREATE NEW CONTEXT NO ID
router.post('/', productCtrl.create)
//* SHOW BY ID
router.get('/:id', productCtrl.show)

//* EDIT BY ID
router.get('/:id/edit', productCtrl.form)

//* UPDATE W/ ID
router.post('/:id', productCtrl.update)
//* REMOVE W/ ID
router.delete('/:id', productCtrl.remove)
router.get('/:id/delete', productCtrl.remove)


module.exports = router