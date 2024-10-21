const mongoose = require('mongoose');

const { Schema } = mongoose;

const Banner = new Schema({
    id: { type: Number, required: true },
    link: { type: String, required: true },
});

module.exports = mongoose.model('Banner', Banner);
