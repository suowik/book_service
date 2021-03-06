var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var base = {
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        NAME: 'PS'
    },
    addons: {},
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: ['syslog://data.logentries.com:13636']
};

module.exports = {config: base, configurator: configurator};