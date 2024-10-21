const express = require('express');
const router = express.Router();
const AddressUserController = require('../controllers/AddressUserController');

router.get('/', AddressUserController.item);

module.exports = router;
