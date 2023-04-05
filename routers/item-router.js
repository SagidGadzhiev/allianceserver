const express = require('express');

const products = require('../models/item-model');

const router = express.Router();


const indexArray = [
    {id: 0, name: 'processor', value: 'i3-1005G1'},
    {id: 1, name: 'processor', value: 'i7-1255U'},
    {id: 2, name: 'processor', value: 'Ryzen 5'},
    {id: 3, name: 'processor', value: 'i5-1135G7'},
    {id: 4, name: 'processor', value: 'N4500'},
    {id: 5, name: 'processor', value: 'i5-1235U'},
    {id: 6, name: 'processor', value: 'i5-11300H'},
    {id: 7, name: 'processor', value: 'ATHLON 300U'},
    {id: 8, name: 'processor', value: 'Pentium 6405U'},
    {id: 9, name: 'processor', value: 'Celeron DC  N4020'},
    {id: 10, name: 'processor', value: 'Celeron N4020'},
    {id: 11, name: 'processor', value: 'i3-10110U'},
    {id: 12, name: 'processor', value: 'i3-1115G4'},
    {id: 13, name: 'processor', value: 'i5-11400H'},
    {id: 14, name: 'processor', value: 'i7-11370H'},
    {id: 15, name: 'ram', value: ',4GB,'},
    {id: 16, name: 'ram', value: ', 4GB,'},
    {id: 17, name: 'ram', value: ',8GB,'},
    {id: 18, name: 'ram', value: ', 8GB,'},
    {id: 19, name: 'ram', value: ',12GB,'},
    {id: 20, name: 'ram', value: ', 12GB,'},
    {id: 21, name: 'ram', value: ',16GB,'},
    {id: 22, name: 'ram', value: ', 16GB,'},
    {id: 23, name: 'rom', value: '1TB+SSD 128GB'},
    {id: 24, name: 'rom', value: '1TB+SSD128GB'},
    {id: 25, name: 'rom', value: '1TB+SSD 256GB'},
    {id: 26, name: 'rom', value: '1TB+SSD256GB'},
    {id: 27, name: 'rom', value: 'SSD 256GB'},
    {id: 28, name: 'rom', value: 'SSD256GB'},
    {id: 29, name: 'rom', value: 'SSD 120GB'},
    {id: 30, name: 'rom', value: 'SSD120GB'},
    {id: 31, name: 'rom', value: 'SSD 512GB'},
    {id: 32, name: 'rom', value: 'SSD512GB'},
    {id: 33, name: 'rom', value: ',1TB,'},
    {id: 34, name: 'rom', value: '1TB+SSD 512GB'},
    {id: 35, name: 'rom', value: 'SSD 480GB'},
    {id: 36, name: 'rom', value: ', 1TB,'},
    {id: 37, name: 'rom', value: ', 500GB,'},
    {id: 38, name: 'rom', value: ',500GB,'},
    {id: 39, name: 'rom', value: '500GB+SSD 256GB'},
    {id: 40, name: 'rom', value: '500GB+SSD 128GB'},
    {id: 41, name: 'rom', value: 'SSD 128GB'},
    {id: 42, name: 'rom', value: 'SSD128GB'},
    {id: 43, name: 'rom', value: 'SSD 240GB'},
    {id: 44, name: 'rom', value: 'SSD240GB'},
    {id: 45, name: 'rom', value: ',512GB,'},
    {id: 46, name: 'graphics', value: ',MX550'},
    {id: 47, name: 'graphics', value: ',GTX1650'},
    {id: 48, name: 'graphics', value: ',RTX3050'},
    {id: 49, name: 'graphics', value: ',RTX3050Ti'},
    {id: 50, name: 'graphics', value: ',RTX 3050 Ti'},
    {id: 51, name: 'graphics', value: ',RTX3060'},
    {id: 52, name: 'graphics', value: ',Iris Xe Graphics'},
    {id: 53, name: 'graphics', value: ', MX130'},
    {id: 54, name: 'graphics', value: ',MX130'},
    {id: 55, name: 'graphics', value: ',MX450'},
    {id: 56, name: 'graphics', value: ', MX350'},
    {id: 57, name: 'display', value: '15.6\" FHD'},
    {id: 58, name: 'display', value: '15.6\"HD'},
    {id: 59, name: 'display', value: ' FHD '},
    {id: 60, name: 'display', value: '15.6\"FHD'},
    {id: 61, name: 'ram', value: ',20GB,'},
    {id: 62, name: 'ram', value: ',32GB,'},
    {id: 63, name: 'processorFrequency', value: ' 3.3-4.2GHz,'},
    {id: 64, name: 'processorFrequency', value: ' 3.3-4.5GHz,'},
    {id: 65, name: 'processorFrequency', value: ' 1.2-3.4GHz,'},
    {id: 66, name: 'processorFrequency', value: ' 1.7-4.7GHz,'},
    {id: 67, name: 'processorFrequency', value: ' 2.4-4.2GHz,'},
    {id: 68, name: 'processorFrequency', value: ' 1.1-2.8GHz,'},
    {id: 69, name: 'processorFrequency', value: ' 1.3-4.4GHz,'},
    {id: 70, name: 'processorFrequency', value: ' 2.8-4.7GHz,'},
    {id: 71, name: 'processorFrequency', value: ' 2.6-4.4GHz,'},
    {id: 72, name: 'processorFrequency', value: ' 2.4-3.3GHz,'},
    {id: 73, name: 'processorFrequency', value: ' 2.4GHz,'},
    {id: 74, name: 'processorFrequency', value: '2.1-4.1GHz,'},
    {id: 75, name: 'processorFrequency', value: ' 1.7-4.1GHz,'},
    {id: 76, name: 'processorFrequency', value: '2.4- 4.2GHz,'},
    {id: 77, name: 'processorFrequency', value: ' 2.1-4.1 GHz,'},
    {id: 78, name: 'processorFrequency', value: ' 3.3-4.8GHz,'},
    {id: 79, name: 'processorFrequency', value: ' 1.1-2.6GHz,'},
    {id: 80, name: 'processorFrequency', value: ' 1.2-4.4GHz,'},
    {id: 81, name: 'processorFrequency', value: ' 1.30GHz,'},
    {id: 81, name: 'processorFrequency', value: ' 2.2-4.5Ghz,'},
    {id: 82, name: 'color', value: ' BLACK'},
    {id: 83, name: 'color', value: ',BLACK'},
    {id: 84, name: 'color', value: ',SILVER'},
    {id: 85, name: 'color', value: ', BLACK'},
    {id: 86, name: 'color', value: ', SILVER'},
    {id: 87, name: 'color', value: ', PLATINUM GRAY'},
    {id: 88, name: 'color', value: ', ABYSS BLUE'},
    {id: 89, name: 'color', value: 'MINERAL GRAY'},
    {id: 90, name: 'color', value: ', IRON GRAY'},
    {id: 91, name: 'color', value: ',SLATE GRAY'},
    {id: 92, name: 'displayFrequency', value: ' IPS 144Hz FHD'},
    {id: 93, name: 'displayFrequency', value: 'IPS FHD 120hz,'},
    {id: 94, name: 'displayFrequency', value: 'FHD 144Hz IPS,'},
];
router.get('/', async (req, res) => {
    const items = await products
        .find()
        .then(data => data
            .map(i => i._doc)
            .map((i) => {
                return { ...i, price: i.price >= 150 ? i.price * 1.06 : i.price * 1.1 };
            })
            .map(item => {
                for (let i = 0; i < indexArray.length; i++) {
                    if (item.product.toLowerCase().includes(indexArray[i].value.toLowerCase())) {
                        item[indexArray[i].name] = indexArray[i].value;
                    }
                }
                return item;
            })
            .map(i => {
                i.processor !== undefined ? i.processor = i.processor.replace(/,/g, '') : null;
                i.ram !== undefined ? i.ram = i.ram.replace(/,/g, '') : null;
                i.rom !== undefined ? i.rom = i.rom.replace(/,/g, '') : null;
                i.graphics !== undefined ? i.graphics = i.graphics.replace(/,/g, '') : null;
                i.display !== undefined ? i.display = i.display.replace(/,/g, '') : null;
                i.color !== undefined ? i.color = i.color.replace(/,/g, '') : null;
                i.displayFrequency !== undefined ? i.displayFrequency = i.displayFrequency.replace(/,/g, '') : null;
                i.processorFrequency !== undefined ? i.processorFrequency = i.processorFrequency.replace(/,/g, '') : null;
                return i;
            })
        );
    res.setHeader('Access-Control-Allow-Origin', 'http://allianceplus.kg');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
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
