var assert = require('assert');
var Record = require('../Record.js');

describe('Record', function() {

    var dogManStar;
    var elastica;

    beforeEach(function() {
        dogManStar = new Record('Dog Man Star', 'Suede', 11.99);
        elastica = new Record('Elastica', 'Elastica', 9.99);
    });

    it('should have a title', function() {
        assert.equal('Elastica', elastica.title);
    });
    it('should have an artist', function() {
        assert.equal('Suede', dogManStar.artist);
    });
    it('should have a price', function() {
        assert.equal(9.99, elastica.price);
    });



});