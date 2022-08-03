const express = require('express');

const products = require('../models/item-model');

const router = express.Router();


router.get('/', async (req, res) => {
    const items = await products
        .find()
        .then(data => data
            .map(i => i._doc)
            .map((i) => {
                return {
                    ...i,
                    price: i.price + (i.price * 0.1)
                    // price: i.price <= 30 ?
                    //     i.price + (i.price * 0.2)
                    //     :
                    //     i.price <= 40 ?
                    //         i.price + (i.price * 0.1)
                    //         :
                    //         i.price <= 50 ?
                    //             i.price + (i.price * 0.07)
                    //             :
                    //             i.price <= 60 ?
                    //                 i.price + (i.price * 0.08)
                    //                 :
                    //                 i.price <= 80 ?
                    //                     i.price + (i.price * 0.05)
                    //                     :
                    //                     i.price <= 90 ?
                    //                         i.price + (i.price * 0.06)
                    //                         :
                    //                         i.price + (i.price * 0.04)
                };
            })
        );
    return res.json(items);
});

router.get('/limit/:limit', async (req, res) => {
    await products.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
        .limit(+req.params.limit);
});

router.put('/', async (req, res) => {
    const newProducts = req.body;
    await products.deleteMany((err, doc) => err ? err : doc);
    await products.create(newProducts, (err, doc) => err ? err : doc);
    return res.json({ status: 'New products list created :)' });
});

router.delete('/', async (req, res) => {
    await products.deleteMany((err, doc) => err ? err : doc);
    return res.json({ status: 'successfully deleted' });
});

module.exports = router;
