var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('GRATULATION! GABA WITH YOUR CI/CD SETUP');
});

app.listen(process.env.PORT || 4500);

module.exports = app;
