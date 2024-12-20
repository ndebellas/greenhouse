var proxy = require('express-http-proxy');
var app = require('express')();
const port = 8888;

app.use(function (req, res, next) {
  //console.log(req.originalUrl);
  if (req.originalUrl.toLocaleLowerCase().startsWith('/api')) {
    next();
  } else {
    proxy('127.0.0.1:8080')(req, res, next);
  }
});
 
 
 app.get('/api/outdoor-temp', (req, res) => {
  res.send({
    temp: 50 + Math.random()*4,
    humidity: 22 + Math.random()*4
  });
});

 // Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
