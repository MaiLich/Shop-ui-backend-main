const express = require('express');
const router = express.Router();
const AccessoryController = require('../controllers/AccessoryController');

router.get('/:slug', AccessoryController.item);
router.get('/', AccessoryController.index);

module.exports = router;
