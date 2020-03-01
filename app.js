const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Marie !");
});
 
module.exports.app = app;
