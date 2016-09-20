module.exports = function(json, url, callback) {
  // 使用python进行爬虫
  var spawn = require('child_process').spawn;
  var python_process = spawn('python', ['./controllers/crawl.py']);
  var data = JSON.parse(json);
  data.url = url;

  var output = '';
  console.log(json);

  python_process.stderr.on('data', function(chunk) {
    output += chunk.toString();
  });
  python_process.stdout.on('data', function(chunk){
    output += chunk.toString();
  });
  python_process.stdout.on('close', function(data){
    console.log(output);
    callback(output);
  });
  python_process.stdin.write(JSON.stringify(data));
  python_process.stdin.end();
};
