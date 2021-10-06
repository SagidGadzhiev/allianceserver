const express = require('express');
const router = express.Router();
const saleProds = require('../models/saleProducts-model');

router.get('/', async (req, res) => {
    const it = await saleProds.find().then(data => data);
    return res.json(it)
});

router.post('/', async (req, res) => {
    const saleProd = req.body;
    await saleProds.create(saleProd, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: 'success', saleProd})
});

router.delete('/', async (req, res) => {
    await saleProds.deleteMany({}, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: 'successfully deleted'})
});

module.exports = router;