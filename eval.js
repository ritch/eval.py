var spawn = require('child_process').spawn
  , py = spawn('python', [__dirname + '/eval.py'])
;

exports.timeout = 30000; 

exports.eval = function (src, done) {
  py.stdout.once('data', function (data) {
    done(null, JSON.parse(data.toString()));
  });
  
  py.stderr.once('data', function (data) {
    done(JSON.parse(data.toString()));
  });
  
  setTimeout(function () {
    py.stderr.emit('timeout');
  }, exports.timeout);
  
  py.stdin.write(src + '\n');
};