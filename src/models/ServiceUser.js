const mongoose = require('mongoose');

const { Schema } = mongoose;

const ServiceUser = new Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String },
    img: { type: String, required: true },
});

module.exports = mongoose.model('ServiceUser', ServiceUser);
