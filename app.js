const app = require('express')()

app.get('/', (req, res) => {
  res.send("* Hello from Phil THOMAS !");
});
 
module.exports.app = app;
