const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Bert !");
});
 
module.exports.app = app;
