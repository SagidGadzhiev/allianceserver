const express = require('express');

const productsModel = require('../models/item-model');
const novaProductsModel = require('../models/novaProducts-model');
const saleProductsModel = require('../models/saleProducts-model');

const router = express.Router();


const collections = [
    productsModel,
    novaProductsModel,
    saleProductsModel
];

const updateImage = (prodID, url) => {
    for (let i = 0; i < collections.length; i++) {
        collections[i].updateOne(
            { id: prodID },
            { $set: { img: url } },
            null,
            (err, doc) => err ? err : doc
        );
    }
};

router.get('/:id', async (req, res) => {
    await productsModel.find(
        { id: req.params.id },
        (err, doc) => err ? err : res.send(doc)
    );
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const img = req.body.img;
    await updateImage(id, img);
    return res.json({ status: 'success', id, img });
});

module.exports = router;
