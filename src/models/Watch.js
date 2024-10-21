const mongoose = require('mongoose');

const { Schema } = mongoose;

const Watch = new Schema({
    id: { type: Number, required: true },
    path: { type: String, required: true },
    category: { type: String, required: true },
    nameBlog: { type: String },
    name: { type: String, required: true },
    capacity: { type: String, required: true },
    colorPopular: { type: String, required: true },
    color: {
        popular: { type: String, required: true },
        listColor: { type: Array, required: true },
    },
    attributes: { type: Array, required: true },
    actualPrice: { type: String, required: true },
    oldPrice: { type: String },
    productEndow: { type: Number },
});

module.exports = mongoose.model('Watch', Watch);
