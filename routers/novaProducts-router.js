const express = require('express');
const router = express.Router();
const novaProds = require('../models/novaProducts-model');

router.get('/', async (req, res) => {
    const it = await novaProds.find().then(data => data);
    return res.json(it)
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

module.exports = router;