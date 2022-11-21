const mocha = require('mocha');
const assert = require('assert');

const mockData = require('./data/tle.mock');

describe('TLE Transform', function() {
    mockData.forEach((d) => {
        describe('# of line 1 components', function() {
            it('Should have N components', function() {
                let N = 10;
                assert.equal(d.tle[0].split(' ').length, N);
            });
        });
    });

});