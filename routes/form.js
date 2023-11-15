const express = require('express');

const router = express.Router();

const messages = require('../data/messages');

router.get('/', (req, res, next) => {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/', (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    author: req.body.messageAuthor,
    date: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
