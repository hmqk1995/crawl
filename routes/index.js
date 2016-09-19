exports.index = function(req, res) {
  var _async = require('async');
  var getCaptcha = require('../controllers/getCaptcha.js');
  getCaptcha(function(sessionId){
      res.render('index', {
      title: '测试',
      sessionId: sessionId
    });
  });
  // _async.series([
  //   function(callback){
  //     return getCaptcha();
  //   },
  //   function(callback){
  //       res.render('index', {
  //       title: '测试',
  //       sessionId: callback
  //     });
  //     callback(null, 'two');
  //   }
  // ]);
};

exports.index2 = function(req, res) {
  var crawl = require('../controllers/crawl.js');
  var data = JSON.stringify(req.body);
  crawl(data);
};
