const express = require('express');
const router = express.Router();
const IphoneController = require('../controllers/IphoneController');

router.get('/:slug', IphoneController.item);
router.get('/', IphoneController.index);

module.exports = router;
