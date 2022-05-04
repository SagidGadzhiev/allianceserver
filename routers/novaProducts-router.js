const express = require('express');

const novaProds = require('../models/novaProducts-model');

const router = express.Router();


router.get('/', async (req, res) => {
    const it = await novaProds.find().then(data => data);
    return res.json(it)
});

router.get('/:code', async (req, res) => {
    const it = await novaProds.findOne({code: req.params.code}, null, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json(it);
});

router.get('/limit/:limit', async (req, res) => {
    await novaProds.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
        .limit(+req.params.limit);
});

router.post('/', async (req, res) => {
    const novaProd = req.body;
    await novaProds.create(novaProd, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: 'success', novaProd})
});

router.delete('/', async (req, res) => {
    await novaProds.deleteMany({}, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: 'successfully deleted'})
});

router.delete('/:code', async (req, res) => {
    await novaProds.deleteOne({ code: req.params.code }, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json({ status: `product with id: ${req.params.code} successfully deleted` });
});

module.exports = router;
