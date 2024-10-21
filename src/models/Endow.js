const mongoose = require('mongoose');

const { Schema } = mongoose;

const Endow = new Schema({
    id: { type: Number, required: true },
    link: { type: String, required: true },
    name: { type: String, required: true },
});

module.exports = mongoose.model('Endow', Endow);
