const Accessory = require('../models/Accessory');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AccessoryController {
    index(req, res, next) {
        const page = req.query._page;
        const pageSize = req.query._limit;
        const startIndex = (page - 1) * pageSize;
        const category = req.query.category;
        const id = req.query.id;

        Accessory.find({})
            .then((accessorys) => {
                const array = [...mutipleMongooseToObject(accessorys)];
                if (id !== undefined) {
                    const accessory = array.find((b) => String(b._id) === String(id));
                    return res.json([accessory]);
                } else if (category !== undefined && pageSize !== undefined && page !== undefined) {
                    const accessory = array.filter((b) => b.category === category);
                    const items = accessory.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (pageSize !== undefined && page !== undefined) {
                    const items = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (category !== undefined) {
                    const accessory = array.filter((b) => b.category === category);
                    return res.json([...accessory]);
                } else {
                    return res.json([...array]);
                }
            })
            .catch(next);
    }
    item(req, res, next) {
        Accessory.findOne({ path: req.params.slug })
            .then((item) => res.json([item]))
            .catch(next);
    }
}

module.exports = new AccessoryController();
