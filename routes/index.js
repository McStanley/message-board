const express = require('express');

const router = express.Router();

const Message = require('../models/Message');

router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.find({}).sort({ date: 'desc' });

    res.render('index', { title: 'Mini Message Board', messages });
  } catch (error) {
    next(new Error('Could not load the messages. Please try again later.'));
  }
});

module.exports = router;
