var express = require('express');
var bodyParser = require('body-parser');
var db = require('./libs/db.js');
var modelProducts = require('./models/products.js');

modelProducts.init(db);

//console.log(modelProducts.model);



const PORT=8090;


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + '/public'));
app.engine('html', require('atpl').__express);
app.set('view engine','html');
app.set('devel',false);

app.get('/products/',function(req,res){
    modelProducts.model.fetchAll().then(function(product){
        res.json(product);
    });

});

app.listen (PORT,function(){
    console.log('Server ready.');
    console.log('Listening on: http://localhost:'+PORT+'/');
});