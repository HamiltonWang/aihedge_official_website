var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var learnRouter = require('./routes/learn');
var litepaperRouter = require('./routes/litepaper');
var blogRouter = require('./routes/blog');
var docsRouter = require('./routes/docs');
var careersRouter = require('./routes/careers');
var contactRouter = require('./routes/contact');
var termsRouter = require('./routes/terms');
var privacyRouter = require('./routes/privacy');
var disclaimerRouter = require('./routes/disclaimer');
var trademarkRouter = require('./routes/trademark');
var brandRouter = require('./routes/brand');
var page404Router = require('./routes/page404');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/learn', learnRouter);
app.use('/docs', docsRouter);
app.use('/litepaper', litepaperRouter);
app.use('/blog', blogRouter);

app.use('/careers', careersRouter);
app.use('/contact', contactRouter);
app.use('/terms', termsRouter);
app.use('/privacy', privacyRouter);
app.use('/disclaimer', disclaimerRouter);
app.use('/trademark', trademarkRouter);
app.use('/brand', brandRouter);
app.use('/*', page404Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
