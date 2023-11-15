const express = require('express');

const router = express.Router();

const messages = require('../data/messages');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
