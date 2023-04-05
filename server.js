require('dotenv').config();

const express = require('express');
const cors = require('cors');

const https = require('https');
const fs = require('fs');

const connectToDB = require('./connectToDB');

const itemsRouter = require('./routers/item-router');
const novaProdsRouter = require('./routers/novaProducts-router');
const saleProdsRouter = require('./routers/saleProducts-router');
const orderRouter = require('./routers/orders-router');
const imageRouter = require('./routers/image-router');
const currencyRouter = require('./routers/currency-router');
const bestsellersRouter = require('./routers/bestsellers-router');


const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json({limit: '50mb'}));
server.use(cors());

connectToDB();

const options = {
    key:fs.readFileSync('certificates/key.pem'),
    cert:fs.readFileSync('certificates/cert.pem')
};

server.get('/', (req, res) => res.send('Server is working'));

server.use('/products', itemsRouter);
server.use('/nova', novaProdsRouter);
server.use('/sale', saleProdsRouter);
server.use('/orders', orderRouter);
server.use('/image', imageRouter);
server.use('/currency', currencyRouter);
server.use('/bestsellers', bestsellersRouter);

https.createServer(options, server).listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`));
// server.listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`));
