var _ = require('lodash').merge;
var base = require('./base');

var prod = {
    name: 'book-inventory-suowik-test',
    collaborators: ['pkiwols@gmail.com', 'marcin.juszkiewicz@schibsted.pl']
};

var config = _({}, base.config, prod);

base.configurator(config);