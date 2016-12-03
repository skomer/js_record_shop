


var RecordShop = function(name, location) {
    this.name = name;
    this.location = location;
    this.stock = [];
    this.balance = 500;
}

RecordShop.prototype = {
    addRecord: function(record) {
        this.stock.push(record);
    }



}



module.exports = RecordShop;