const Comment = require('../models/Comment');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CommentController {
    itemPost(req, res, next) {
        const newComment = new Comment(req.body);
        newComment.save();
    }
    itemGet(req, res, next) {
        Comment.find({})
            .then((items) => {
                const sortOrder = req.query._order || 'asc'; // Lấy tham số sắp xếp từ query string

                const array = [...mutipleMongooseToObject(items)];
                const arraySort = array.filter((e) => e.title === req.query.title);
                const sortedItems = arraySort.sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return a._id < b._id ? -1 : 1;
                    } else {
                        return a._id < b._id ? 1 : -1;
                    }
                });
                res.json([...sortedItems]);
            })
            .catch(next);
    }
}

module.exports = new CommentController();
