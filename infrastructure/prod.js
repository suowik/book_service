var _ = require('lodash').merge;
var base = require('./base');

var prod = {
    name: 'book-inventory-suowik',
    collaborators: ['pkiwols@gmail.com', 'marcin.juszkiewicz@schibsted.pl'],
    domains: ['book-inventory-suowik.herokuapp.com']
};

var config = _({}, base.config, prod);

base.configurator(config);