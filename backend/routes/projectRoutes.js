const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectControllers.js');

router.get('/project', projectController);

module.exports = router;
