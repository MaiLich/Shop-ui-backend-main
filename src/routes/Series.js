const express = require('express');
const router = express.Router();
const SeriesController = require('../controllers/SeriesController');

router.get('/:name', SeriesController.title);
router.get('/', SeriesController.item);

module.exports = router;
