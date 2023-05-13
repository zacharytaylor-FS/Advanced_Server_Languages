const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/Products')

//* SHOW ALL
router.get('/', productCtrl.index)
//* CREATE
router.get('/new', productCtrl.form)
//* SHOW BY ID
router.get('/:id', productCtrl.show)

//* EDIT BY ID
router.get('/:id/edit', productCtrl.form)

//* CREATE NEW CONTEXT NO ID
router.post('/', productCtrl.create)
//* UPDATE W/ ID
router.post('/:id', productCtrl.update)
//* REMOVE W/ ID
router.delete('/:id', productCtrl.remove)
router.post('/:id/delete', productCtrl.remove)


module.exports = router