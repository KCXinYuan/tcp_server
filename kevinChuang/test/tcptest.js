/*eslint-env es6*/
/*jshint esversion:6*/
const expect = require('chai').expect;
const net = require('net');

require('../tcp_server');

describe('tcp tests', () => {
  it('should send a message to all clients except sender', (done) => {
    var result;
    var wroteBack = false;
    const clientOne = net.connect(3000, () => {
      clientOne.on('data', () =>{
        wroteBack = true;
      });
      clientOne.write('TEST');
    });
    const clientTwo = net.connect(3000, () => {
      clientTwo.on('data', (data) => {
        expect(data.toString()).to.eql('TEST');
        done();
      });
    });
    setTimeout(() => {

    });
  });
});
