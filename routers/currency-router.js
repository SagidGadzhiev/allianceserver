const express = require('express');

const currencies = require('../models/currency-model');

const router = express.Router();


router.get('/', async (req, res) => {
    const currency = await currencies.find({}, (err, doc) => err ? err : doc);
    return res.json(currency);
});

router.put('/', async (req, res) => {
    const newCurrencyValue = req.body;
    await currencies.deleteMany((err, doc) => err ? err : doc);
    await currencies.create(newCurrencyValue, (err, doc) => err ? console.log(err) : console.log(doc));
    return res.json({status: 'Currency value successfully updated :)'})
});

module.exports = router;
