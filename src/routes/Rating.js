const express = require('express');
const router = express.Router();
const RatingController = require('../controllers/RatingController');

router.post('/', RatingController.itemPost);
router.get('/', RatingController.itemGet);

module.exports = router;
