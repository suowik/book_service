var _ = require('lodash').merge;
var base = require('./base');

var prod = {
    name: 'book-inventory-suowik-test',
    collaborators: ['pkiwols@gmail.com']
};

var config = _({}, base.config, prod);

base.configurator(config);