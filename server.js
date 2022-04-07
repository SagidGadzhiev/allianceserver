require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const connectToDB = require('./connectToDB');
const itemsRouter = require('./routers/item-router');
const novaProdsRouter = require('./routers/novaProducts-router');
const saleProdsRouter = require('./routers/saleProducts-router');
const orderRouter = require('./routers/orders-router');
const productsArr = require('./models/item-model');
const novaProdsModel = require('./models/novaProducts-model');
const saleProdsModel = require('./models/saleProducts-model');

const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());

connectToDB();

server.get('/', (req, res) => {
    res.send('Server is working')
});

server.patch('/image/:productId', async (req, res) => {
    const {productId} = req.params;
    const updateProductImg = req.body.img;

    await productsArr.updateOne({id: productId}, {$set: {img: updateProductImg}}, null, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });

    await novaProdsModel.updateOne({id: productId}, {$set: {img: updateProductImg}}, null, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });

    await saleProdsModel.updateOne({id: productId}, {$set: {img: updateProductImg}}, null, (err, doc) => {
        if (err)
            console.log(err);
        console.log(doc)
    });

    res.json({status: "success", id: productId, img: updateProductImg})

});

server.use('/products', itemsRouter);
server.use('/nova', novaProdsRouter);
server.use('/sale', saleProdsRouter);
server.use('/orders', orderRouter);

server.listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`));
