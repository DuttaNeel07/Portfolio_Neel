const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactControllers.js');

router.post('/contact', contactController);

module.exports = router;