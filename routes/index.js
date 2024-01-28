const express = require('express');

const router = express.Router();

router.use('/', require('./homePage'));
router.use('/contacts', require('./contacts'));

module.exports = router;
