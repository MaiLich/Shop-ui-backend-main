const mongoose = require('mongoose');

const { Schema } = mongoose;

const BannerPage = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    links: { type: Array, required: true },
});

module.exports = mongoose.model('BannerPage', BannerPage);
