const mongoose = require('mongoose');

const { Schema } = mongoose;

const Rating = new Schema({
    data: { type: Object, required: true },
    title: { type: String, required: true },
});

module.exports = mongoose.model('Rating', Rating);
