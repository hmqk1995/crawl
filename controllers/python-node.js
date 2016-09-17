var spawn = require('child_process').spawn,
  py = spawn('python', ['getInfo.py']),
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});

py.stdout.on('end', function(){
  console.log('Sum of numbers=', dataString);
});

// 当子进程退出时，检查是否有错误，同时关闭文件流
py.stdout.on('exit', function(code) {
  if (code != 0) {
    console.log('Failed: ' + code);
  }
});

py.stdin.write(JSON.stringify(data));
py.stdin.end();
