const express = require('express');
const ItemController = require('../controllers/item-controller');
const router = express.Router();


router.get('/', ItemController.getAll);
router.get('/limit/:limit', ItemController.getLimit);
router.put('/', ItemController.update);
router.delete('/', ItemController.deleteAll);

module.exports = router;
