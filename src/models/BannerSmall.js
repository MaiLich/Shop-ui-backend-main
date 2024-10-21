const mongoose = require('mongoose');

const { Schema } = mongoose;

const BannerSmall = new Schema({
    id: { type: Number, required: true },
    link: { type: String, required: true },
    path: { type: String, required: true },
});

module.exports = mongoose.model('BannerSmall', BannerSmall);
