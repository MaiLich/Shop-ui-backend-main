const mongoose = require('mongoose');
const { Schema } = mongoose;

const Address = new Schema({
    name: { type: String, required: true },
    district: { type: Array, required: true },
});

module.exports = mongoose.model('Address', Address);
