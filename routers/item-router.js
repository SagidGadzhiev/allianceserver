const express = require('express');
const router = express.Router();
const products = require('../models/item-model');

router.get('/', async (req, res) => {
    const items = await products.find().then(data => data);
    return res.json(items);
});

router.delete('/', async (req, res) => {
    await products.deleteMany({}, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: 'successfully deleted'})
});

module.exports = router;