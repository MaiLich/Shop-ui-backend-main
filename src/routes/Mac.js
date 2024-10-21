const express = require('express');
const router = express.Router();
const MacController = require('../controllers/MacController');

router.get('/:slug', MacController.item);
router.get('/', MacController.index);

module.exports = router;
