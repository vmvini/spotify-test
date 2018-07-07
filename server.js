const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const spotifyRouter = require('./routes/spotify');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', spotifyRouter);

app.use('/', (req, res) => {
  console.log('requested url', req.originalUrl);
  res.sendFile(__dirname + "/dist/index.html");
});

app.use((req, res, next) => {
  console.log('requested url', req.originalUrl);
  res.sendFile(__dirname + "/dist/index.html");
});

console.log('server is on, go to http://localhost:3000 to signin on spotify');
module.exports = app;
