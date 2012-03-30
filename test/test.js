var expect = require('chai').expect
  , py = require('../')
;

describe('a simple python program', function(){
  it('should evaluate in python and callback with the result', function(done) {
    var s = py.createScript();
    s.write('bar = 8');
    s.write('print(bar)');
    s.on('data', function (bar) {
      expect(bar).to.equal('8\n');
      done();
    });
    s.exec();
  })
  
  it('should evaluate another program', function(done) {
     var s = py.createScript();
     s.write('foo = 2');
     s.write('print(foo)');
     s.on('data', function (bar) {
       expect(bar).to.equal('2\n'); 
       done();
     });
     s.exec();
   })
})

describe('example should work', function(){
  it('should do what it says', function(done) {
    var script = py.createScript()
    
    script
      .write('import json')
      .write('print(json.dumps({"foo": "bar"}))')
      .once('data', function(data) {
        expect(JSON.parse(data).foo).to.equal('bar');
        done();
      })
      .exec()
  })
})