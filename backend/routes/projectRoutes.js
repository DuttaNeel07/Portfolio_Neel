const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectControllers.js');

router.get('/project', projectController.showData);

module.exports = router;
