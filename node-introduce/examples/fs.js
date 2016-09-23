'use strict';

const fs = require('fs');
fs.readFile('/etc/password', (err, data) => {
    if (err) throw err;
    console.log(data);
});