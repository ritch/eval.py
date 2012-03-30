var spawn = require('child_process').spawn
  , fs = require('fs')
  , Stream = require('stream').Stream
;

exports.createScript = function () {
  var mod = new Stream
    , buf = ''
  ;

  mod.write = function (src) {
    buf = buf + src + '\n';
    return this;
  };

  mod.exec = function () {
    fs.writeFileSync('/tmp/src.py', buf, 'utf8');

    // reset
    buf = '';

    var py = exports.py = spawn('python', ['/tmp/src.py']);

    py.stdout.on('data', function (data) {
      mod.emit('data', data.toString());
    })
    
    return this;
  }
  
  return mod;
}


