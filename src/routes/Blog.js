const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

router.get('/', BlogController.item);

module.exports = router;
