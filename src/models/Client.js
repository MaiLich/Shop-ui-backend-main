const mongoose = require('mongoose');

const { Schema } = mongoose;

const Client = new Schema({
    dataUser: { type: Object, required: true },
    dataProduct: { type: Array, required: true },
    total: { type: String, required: true },
    sessionID: { type: Number, required: true },
});

module.exports = mongoose.model('Client', Client);
