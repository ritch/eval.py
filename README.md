# eval.py

This module is somewhat of a joke... just a simple way to execute arbitrary Python.

    var py = require('eval.py')
      , script = py.createScript()
    
    script
      .write('import json')
      .write('print(json.dumps({"foo": "bar"}))')
      .once('data', function(data) {
        console.info(JSON.parse(data).foo); // bar
      })
      .exec()