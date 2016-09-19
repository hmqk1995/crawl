module.exports = function(){
  // 得到验证码和session cookie
  var spawn = require('child_process').spawn;
  var python_process = spawn('python', ['./controllers/getInfo.py']);
  var output = '';
  python_process.stderr.on('data', function(chunk) {
    output += chunk.toString();
  });
  python_process.stdout.on('data', function(chunk) {
    output += chunk.toString();
  });
  python_process.on('close', function() {
    console.log(output);
  });
};
