module.exports = function(callback){
  // 得到验证码和session cookie,返回session cookie
  var spawn = require('child_process').spawn;
  var python_process = spawn('python', ['./controllers/getCaptcha.py']);
  var output = '';
  python_process.stderr.on('data', function(chunk) {
    output += chunk.toString();
  });
  python_process.stdout.on('data', function(chunk) {
    output += chunk.toString();
    output = output.slice(0, 36);
  });
  python_process.on('close', function() {
    callback(output);
  });
};
