const mongoose = require('mongoose');

const { Schema } = mongoose;

const Blog = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    blogPage: { type: Array, required: true },
});

module.exports = mongoose.model('Blog', Blog);
