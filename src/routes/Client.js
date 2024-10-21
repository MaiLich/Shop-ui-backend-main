const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.post('/', ClientController.itemPost);
router.get('/', ClientController.itemGet);

module.exports = router;
