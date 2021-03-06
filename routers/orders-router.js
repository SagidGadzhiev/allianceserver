const express = require('express');

const orderModel = require('../models/orders-model');

const router = express.Router();


router.get('/', async (req, res) => {
    const it = await orderModel.find().then(data => data);
    return res.json(it)
});

router.post('/', async (req, res) => {
    const currentDate = new Date();
    const order = req.body;
    const number = await orderModel.find().then(data => data.length) === 0 ? 1 : await orderModel.find().then(data => data[data.length - 1].orderNumber + 1);
    const orderDate = await orderModel.find().then(data => data.length) === 0 ? `${('0' + currentDate.getDate()).slice(-2)}-${('0' + (currentDate.getMonth() + 1)).slice(-2)}-${('0' + currentDate.getFullYear()).slice(-2)}` : await orderModel.find().then(data => data[data.length - 1].date = `${('0' + currentDate.getDate()).slice(-2)}-${('0' + (currentDate.getMonth() + 1)).slice(-2)}-${('0' + currentDate.getFullYear()).slice(-2)}`);
    await orderModel.create({...order, date: orderDate, orderNumber: number}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: "success", order})
});

router.delete('/', async (req, res) => {
    await orderModel.deleteMany({}, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });
    return res.json({status: 'successfully deleted'})
});

module.exports = router;
