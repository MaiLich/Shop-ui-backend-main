const express = require('express');
const router = express.Router();
const BannerPageController = require('../controllers/BannerPageController');

router.get('/', BannerPageController.item);

module.exports = router;
