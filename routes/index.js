const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Welcome to my message board!',
    author: 'McStanley',
    date: new Date(),
  },
  {
    text: 'Feel free to leave a message!',
    author: 'McStanley',
    date: new Date(),
  },
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
