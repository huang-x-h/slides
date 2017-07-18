const opn = require('opn');
const util = require('util');

module.exports = function search(qs, engine) {
    let url = '';

    switch (engine) {
        case 'baidu':
            url = 'https://www.baidu.com/s?ie=UTF-8&wd=%s';
            break;
        case 'bing':
            url = 'http//cn.bing.com/search?q=%s';
            break;
        case 'github':
            url = 'https://github.com/search?q=%s&ref=opensearch';
            break;
        default:
            url = 'https://www.google.com.hk/#safe=strict&q=%s';
    }

    opn(util.format(url, qs));
}