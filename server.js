require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

server.use(express.json({ limit: "50mb" }));
server.use(cors());
server.use('/products', itemsRouter);
server.use('/nova', novaProdsRouter);
server.use('/sale', saleProdsRouter);
server.use('/orders', orderRouter);
server.use('/image', imageRouter);
server.use('/currency', currencyRouter);
server.use('/bestsellers', bestsellersRouter);

connectToDB();

server.get('/', (req, res) => res.send('Server is working'));

server.listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`));
