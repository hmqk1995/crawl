var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index.js');
var ejs = require('ejs');



app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('./public'))

app.get('/', routes.index);
app.post('/', function(){

});

app.listen(8080, function(){
  console.log('on 8080');
});
