const express = require('express');
const router = express.Router();
const products = require('../models/item-model');

router.get('/', async (req, res) => {
    const items = await products.find().then(data => data);
    return res.json(items);
});

module.exports = router;