var python_node = require('../controllers/python_node.js');

exports.index = function(req, res) {
  python_node();
  res.render('index', {title: '测试'});
}
