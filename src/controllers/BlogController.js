const Blog = require('../models/Blog');

class BlogController {
    item(req, res, next) {
        Blog.findOne({ name: req.query.name })
            .then((blog) => res.json([blog]))
            .catch(next);
    }
}

module.exports = new BlogController();
