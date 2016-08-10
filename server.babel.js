var fs = require('fs');
var path = require('path');
import express from 'express';
var bodyParser= require('body-parser');

var app = express();

var PRODUCTS_FILE = path.join(__dirname, 'products.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest products.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/products', function(req, res) {
  fs.readFile(PRODUCTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/products', function(req, res) {
  fs.readFile(PRODUCTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var products = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newProduct = {
      id: Date.now(),
      productName: req.body.productName,
      text: req.body.text,
      src: req.body.src
    };
    products.push(newProduct);
    fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(products);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
