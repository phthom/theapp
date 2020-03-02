const app = require('express')()

app.get('/', (req, res) => {
  res.send("* Hello from THOMAS !");
});
 
module.exports.app = app;
