const express = require('express');
const bestsellers = require('../models/bestsellers-model');
const router = express.Router();


router.get('/', async (req, res) => {
    const it = await bestsellers.find().then(data => data);
    return res.json(it);
});

router.get('/:code', async (req, res) => {
    const it = await bestsellers.findOne({ code: req.params.code }, null, {}, (err, doc) => {
        if(err)
            console.log(err);
        console.log(doc);
    });
    return res.json(it);
});

router.post('/', async (req, res) => {
    const bestsellerProd = req.body;
    await bestsellers.create(bestsellerProd, (err, doc) => {
        if(err)
            console.log(err);
        console.log(doc);
    });
    return res.json({status: 'success', bestsellerProd});
});

router.delete('/', async (req, res) => {
    await bestsellers.deleteMany({}, {}, (err, doc) => {
        if(err)
            console.log(err);
        console.log(doc);
    });
    return res.json({status: 'successfully deleted'});
});

module.exports = router;
