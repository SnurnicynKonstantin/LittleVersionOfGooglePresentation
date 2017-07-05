var should = require('should');
var request = require('request');
var url = 'http://localhost:8000/presentations';
var HttpServer = require('./server').HttpServer;
var server;

describe('HttpServer', function () {

    before(function (done) {
        server = new HttpServer({port: 8080}).start(done);
    });

    after(function (done) {
        server.stop(done);
    });

    it('should get success = true', function (done) {
        request(url, function (error, response, body) {
            response.statusCode.should.eql(200);
            assert.equal(body.success, true);
            done();
        });
    });
});