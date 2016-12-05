var assert = require('assert');
var RecordShop = require('../RecordShop.js');
var Record = require('../Record.js');

describe('Record Shop', function() {

    var rollerRecords;
    var nevermind;
    var stoosh;
    var dogManStar;
    var elastica;
    var dookie;

    beforeEach(function() {
        rollerRecords = new RecordShop('Roller Records', 'Edinburgh');
        nevermind = new Record('Nevermind', 'Nirvana', 11.29);
        stoosh = new Record('Stoosh', 'Skunk Anansie', 10.99);
        dogManStar = new Record('Dog Man Star', 'Suede', 11.99);
        elastica = new Record('Elastica', 'Elastica', 9.99);
        dookie = new Record('Dookie', 'Green Day', 12.49);
    });

    it('should have a name', function() {
        assert.equal('Roller Records', rollerRecords.name);
    });
    it('should have a location', function() {
        assert.equal('Edinburgh', rollerRecords.location);
    });
    it('should have no opening stock', function() {
        assert.equal(0, rollerRecords.stock.length);
    });
    it('should have an opening cash balance of £500', function() {
        assert.equal(500, rollerRecords.balance);
    });
    it('should be able to add records to stock', function() {
        rollerRecords.addRecord(nevermind);
        rollerRecords.addRecord(stoosh);
        assert.equal(2, rollerRecords.stock.length);
        assert.equal('Nevermind', rollerRecords.stock[0].title);
    });
    it('should be able to collate the stock in its inventory', function() {
        rollerRecords.addRecord(nevermind);
        rollerRecords.addRecord(nevermind);
        rollerRecords.addRecord(nevermind);
        rollerRecords.addRecord(stoosh);
        rollerRecords.addRecord(dogManStar);
        rollerRecords.addRecord(dogManStar);
        rollerRecords.collateStock();

    });
    it('should be able to print its inventory', function() {
        rollerRecords.addRecord(nevermind);
        rollerRecords.addRecord(dookie);
        rollerRecords.addRecord(nevermind);
        rollerRecords.addRecord(stoosh);
        rollerRecords.addRecord(dogManStar);
        rollerRecords.addRecord(dogManStar);
        rollerRecords.addRecord(elastica);
        rollerRecords.addRecord(nevermind);
        rollerRecords.collateStock();
        rollerRecords.printInventory();

    });






});






