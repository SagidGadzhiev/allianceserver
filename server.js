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
    res.send('Server is working');
});

const collections = [
    productsArr,
    novaProdsModel,
    saleProdsModel
];

const updateImage = (prodID, url) => {
    for (let i = 0; i < collections.length; i++) {
        collections[i].updateOne({ id: prodID }, { $set: { img: url } });
    }
};

server.patch('/image/:id', async (req, res) => {
    const { id } = req.params;
    const img = req.body.img;
    updateImage(id, img);
    return res.json({ status: 'success', id, img });
});

server.use('/products', itemsRouter);
server.use('/nova', novaProdsRouter);
server.use('/sale', saleProdsRouter);
server.use('/orders', orderRouter);

server.listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`));
