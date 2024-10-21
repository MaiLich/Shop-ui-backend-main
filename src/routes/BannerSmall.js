const express = require('express');
const router = express.Router();
const BannerSmallController = require('../controllers/BannerSmallController');

router.get('/', BannerSmallController.index);

module.exports = router;
