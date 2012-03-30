# eval.py

This module is somewhat of a joke... just a simple way to execute arbitrary Python.

    require('eval.py').eval('abs(-100) > 0', function(err, data) {
      // python will try to eval and dump back as json
      // then its parsed by node
      console.info('this should be true', data);
    })