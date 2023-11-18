const cookieParser = require('cookie-parser');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const formRouter = require('./routes/form');

require('dotenv').config();

mongoose.set('strictQuery', false);

const { DATABASE_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(DATABASE_URI);
  } catch (error) {
    console.error(error);
  }
})();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', formRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
