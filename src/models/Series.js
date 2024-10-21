const mongoose = require('mongoose');

const { Schema } = mongoose;

const Series = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: Array, required: true },
});

module.exports = mongoose.model('Series', Series);
