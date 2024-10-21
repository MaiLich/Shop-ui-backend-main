const ServiceUser = require('../models/ServiceUser');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ServiceUserController {
    index(req, res, next) {
        ServiceUser.find({})
            .then((items) => {
                const page = req.query._page;
                const pageSize = req.query._limit;
                const startIndex = (page - 1) * pageSize;
                const array = [...mutipleMongooseToObject(items)];
                const item = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                return res.json([...item]);
            })
            .catch(next);
    }
}

module.exports = new ServiceUserController();
