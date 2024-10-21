const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.post('/', CommentController.itemPost);
router.get('/', CommentController.itemGet);

module.exports = router;
