#!/usr/bin/env node

const search = require('./');

let qs = process.argv[2].split(':');

if (qs.length === 1) {
    search(qs[0]);
} else {
    search(qs[1], qs[0]);
}