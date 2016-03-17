var request = require('supertest');
var assert = require('assert');
var stockRepository = require('../mockRepo')();
var app = require('../app')(stockRepository);

describe('POST /stock', function () {
    it('respond with correct json body', function (done) {
        request(app)
            .post('/stock')
            .set('Accept', 'application/json')
            .send({isbn: 'anIsbn', count: 10})
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
});

describe('GET /stock/asdf', function () {
    it('respond with correct count', function (done) {
        request(app)
            .get('/stock/asdf')
            .set('Accept', 'application/json')
            .expect("Content-Type", /json/)
            .expect(200, {count: 999}, done);
    })
});