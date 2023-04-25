const ItemService = require('../services/item-service');


class ItemController {
    async getAll(req, res) {
        try {
            const items = await ItemService.getAll();
            return res.json(items);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getLimit(req, res) {
        try {
            const items = await ItemService.getLimit(+req.params.limit);
            return res.json(items);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async update(req, res) {
        try {
            await ItemService.update(req.body);
            return res.json({ status: 'New products list created :)' });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deleteAll(req, res) {
        try {
            const items = await ItemService.deleteAll();
            return res.json({ status: 'successfully deleted', items });
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

module.exports = new ItemController();
