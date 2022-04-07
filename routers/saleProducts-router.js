const express = require('express');
const router = express.Router();
const saleProds = require('../models/saleProducts-model');

router.get('/', async (req, res) => {
    const it = await saleProds.find().then(data => data);
    return res.json(it);
});

router.get('/:code', async (req, res) => {
    const it = await saleProds.findOne({code: req.params.code}, null, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json(it);
});

router.get('/limit/:limit', async (req, res) => {
    await saleProds.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
        .limit(+req.params.limit);
});

router.post('/', async (req, res) => {
    const saleProd = req.body;
    await saleProds.create(saleProd, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json({ status: 'success', saleProd });
});

router.delete('/', async (req, res) => {
    await saleProds.deleteMany({}, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json({ status: 'successfully deleted' });
});

router.delete('/:code', async (req, res) => {
    await saleProds.deleteOne({ code: req.params.code }, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json({ status: `product with id: ${req.params.code} successfully deleted` });
});

module.exports = router;
