const express = require('express');
const router = express.Router();
const products = require('../models/item-model');

router.get('/', async (req, res) => {
    const items = await products
        .find()
        .then(data => data
            .map(i => i._doc)
            .map((i) => {
                return {
                    ...i,
                    price: i.price <= 10 ? i.price + (i.price * 0.2)
                        : i.price <= 20 ? i.price + (i.price * 0.2)
                            : i.price <= 30 ? i.price + (i.price * 0.2)
                                : i.price <= 40 ? i.price + (i.price * 0.1)
                                    : i.price <= 50 ? i.price + (i.price * 0.07)
                                        : i.price <= 60 ? i.price + (i.price * 0.08)
                                            : i.price <= 70 ? i.price + (i.price * 0.05)
                                                : i.price <= 80 ? i.price + (i.price * 0.05)
                                                    : i.price <= 90 ? i.price + (i.price * 0.06)
                                                        : i.price <= 100 ? i.price + (i.price * 0.04)
                                                            : i.price <= 150 ? i.price + (i.price * 0.04)
                                                                : i.price <= 200 ? i.price + (i.price * 0.03)
                                                                    : i.price <= 250 ? i.price + (i.price * 0.04)
                                                                        : i.price <= 300 ? i.price + (i.price * 0.04)
                                                                            : i.price <= 400 ? i.price + (i.price * 0.04)
                                                                                : i.price <= 450 ? i.price + (i.price * 0.035)
                                                                                    : i.price <= 500 ? i.price + (i.price * 0.03)
                                                                                        : i.price <= 600 ? i.price + (i.price * 0.03)
                                                                                            : i.price <= 700 ? i.price + (i.price * 0.04)
                                                                                                : i.price <= 800 ? i.price + (i.price * 0.04)
                                                                                                    : i.price <= 900 ? i.price + (i.price * 0.04)
                                                                                                        : i.price <= 1000 ? i.price + (i.price * 0.04)
                                                                                                            : i.price <= 1100 ? i.price + (i.price * 0.03)
                                                                                                                : i.price <= 1200 ? i.price + (i.price * 0.03)
                                                                                                                    : i.price <= 1300 ? i.price + (i.price * 0.03)
                                                                                                                        : i.price <= 1400 ? i.price + (i.price * 0.03)
                                                                                                                            : i.price <= 1500 ? i.price + (i.price * 0.03)
                                                                                                                                : i.price + (i.price * 0.03)
                };
            })
        );
    return res.json(items);
});

router.delete('/', async (req, res) => {
    await products.deleteMany({}, {}, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc);
    });
    return res.json({ status: 'successfully deleted' });
});

module.exports = router;
