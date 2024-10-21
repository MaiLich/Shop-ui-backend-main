const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataUser = new Schema({
    dataUser: { type: Object, required: true },
    deliveryAddress: { type: Array, required: true },
});

module.exports = mongoose.model('DataUser', DataUser);
