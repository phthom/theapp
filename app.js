const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from PhilT !");
});
 
module.exports.app = app;
