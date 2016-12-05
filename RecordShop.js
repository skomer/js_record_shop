


var RecordShop = function(name, location) {
    this.name = name;
    this.location = location;
    this.stock = [];
    this.collatedStock = [];
    this.balance = 500;
}

RecordShop.prototype = {
    addRecord: function(record) {
        this.stock.push(record);
    },
    collateStock: function() {
        return this.stock.map(function(record) {
            
        });
    },



    printInventory: function() {
        //console.log(this.stock);
        console.log("------------------------------------------------------------------\n|  Title  |  Artist  |  Unit price  |  Quantity  |  Total price  |\n------------------------------------------------------------------");
    }


}



module.exports = RecordShop;