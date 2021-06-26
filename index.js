var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(process.env.PORT || 4000);

module.exports = app;
