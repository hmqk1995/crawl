var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index.js');
var ejs = require('ejs');

// 解析POST请求数据
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('./public'))

app.get('/', routes.index);
app.post('/', function(req, res){
  console.log(req.body)
});

app.listen(8080, function(){
  console.log('on 8080');
});
