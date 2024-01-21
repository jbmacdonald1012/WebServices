const express = require('express');
const router = express.Router();

const homePageController = require('../controllers/lesson1');

router.get('/', homePageController.homeRoute);

router.get('/kids', homePageController.kidsRoute);

module.exports = router;