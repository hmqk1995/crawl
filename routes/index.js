module.exports.index = function(req, res) {
  // var _async = require('async');
  var getCaptcha = require('../controllers/getCaptcha.js');
  getCaptcha(function(sessionId){
      res.render('index', {
      title: '测试',
      sessionId: sessionId,
      info: null
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

module.exports.index2 = function(req, res) {
  // !待处理，此处得不到sessionId
  var getCaptcha = require('../controllers/getCaptcha.js');
  var sessionId = getCaptcha();
  var crawl = require('../controllers/crawl.js');
  var data = JSON.stringify(req.body);

  // 要爬取的url
  var url = 'http://jw.cuc.edu.cn/academic/manager/score/studentOwnScore.do?groupId=&moduleId=2020';
  crawl(data, url, function(data){
    // 解析html字符串
    var parse = require('../controllers/parsehtml.js');
    var data = parse.score(data);

    res.render('index', {
      title: '测试',
      sessionId: sessionId,
      info: data
    });
  });
};
