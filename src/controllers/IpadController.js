const Ipad = require('../models/Ipad');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class IpadController {
    index(req, res, next) {
        const page = req.query._page;
        const pageSize = req.query._limit;
        const startIndex = (page - 1) * pageSize;
        const category = req.query.category;
        const id = req.query.id;

        Ipad.find({})
            .then((ipads) => {
                const array = [...mutipleMongooseToObject(ipads)];
                if (id !== undefined) {
                    const ipad = array.find((b) => String(b._id) === String(id));
                    return res.json([ipad]);
                } else if (category !== undefined && pageSize !== undefined && page !== undefined) {
                    const ipad = array.filter((b) => b.category === category);
                    const items = ipad.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (pageSize !== undefined && page !== undefined) {
                    const items = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (category !== undefined) {
                    const ipad = array.filter((b) => b.category === category);
                    return res.json([...ipad]);
                } else {
                    return res.json([...array]);
                }
            })
            .catch(next);
    }
    item(req, res, next) {
        Ipad.findOne({ path: req.params.slug })
            .then((item) => res.json([item]))
            .catch(next);
    }
}

module.exports = new IpadController();
