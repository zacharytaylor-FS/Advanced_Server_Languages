const express = require('express');
const router = express.Router();
const variantCtrl = require('../controllers/variantsController')

//* SHOW ALL
router.get('/', variantCtrl.index)
//* CREATE
router.get('/new', variantCtrl.form)
//* SHOW BY ID
router.get('/:id', variantCtrl.show)
//* EDIT BY ID
router.get('/:id/edit', variantCtrl.form)
//* CREATE NEW CONTEXT NO ID
router.post('/', variantCtrl.create)
//* UPDATE W/ ID
router.post('/:id', variantCtrl.update)
//* REMOVE W/ ID
router.delete('/:id', variantCtrl.remove)
router.get('/:id/delete', variantCtrl.remove)

module.exports = router


