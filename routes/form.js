const express = require('express');

const router = express.Router();

const Message = require('../models/Message');

router.get('/', (req, res, next) => {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/', async (req, res, next) => {
  try {
    await Message.create({
      text: req.body.messageText,
      author: req.body.messageAuthor,
    });

    res.redirect('/');
  } catch (error) {
    next(new Error('Could not submit the message. Try again later.'));
  }
});

module.exports = router;
