const DataUser = require('../models/DataUser');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class DataUserController {
    itemPost(req, res, next) {
        const newUser = new DataUser(req.body);
        newUser.save().catch((error) => {});
    }
    itemGetLogin(req, res, next) {
        const { userName, password } = req.body;

        DataUser.find({}).then((dataUsers) => {
            const array = [...mutipleMongooseToObject(dataUsers)];
            const user = array.find((e) => e.dataUser.userName === userName && e.dataUser.password === password);

            if (user) {
                return res.status(200).json([user]);
            } else {
                return res.status(401).json([]);
            }
        });
    }
    itemGetUser(req, res, next) {
        DataUser.findOne({ _id: req.query.id !== undefined ? String(req.query.id) : undefined })
            .then((user) => {
                return res.json([user]);
            })
            .catch(next);
    }
    itemPutUser(req, res, next) {
        DataUser.updateOne({ _id: req.params.id !== undefined ? String(req.params.id) : undefined }, req.body).catch(
            next,
        );
    }
}

module.exports = new DataUserController();
