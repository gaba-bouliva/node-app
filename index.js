var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send(
    'GRATULATION! GABA You have Configured Your CI/CD With Jenkins SUCCESSFULLY!!!'
  );
});

app.listen(process.env.PORT || 4500);

module.exports = app;
