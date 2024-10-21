const express = require('express');
const router = express.Router();
const EndowController = require('../controllers/EndowController');

router.get('/', EndowController.item);

module.exports = router;
