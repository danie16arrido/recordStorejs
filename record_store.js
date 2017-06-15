var _ = require( 'lodash' );
var RecordStore = function( name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  add: function ( record ) {
    this.inventory.push( record );
  },

  listInventory: function(){
    var counter = 1;
    var list = "";
    for(var record of this.inventory){
      var lineBreak = "\n";
      if (counter == this.inventory.length) {
        lineBreak = "";
      }
      list += counter + ". " + record.printProperties() + lineBreak;
      counter++;
    }
    return list;
  },

  remove: function( recordToDelete ) {
    _.remove( this.inventory, function( record ) {
      return record.title === recordToDelete.title &&
                  record.artist === recordToDelete.artist;
    })
  },

  modifyBalance: function( modifyAmount ){
    this.balance += modifyAmount;
  },

  sell: function( record ){
    if(!this.inventory.includes(record)) return false;
    this.remove( record );
    this.modifyBalance( record.price );
  },

  financeData: function(){
    return "Balance: £" + this.balance +
    " Inventory: £" + this.inventoryValue();
  },

  inventoryValue: function(){
    var result = _.sumBy(this.inventory, 'price');
    return parseFloat(result.toFixed(2));
  }

}

module.exports = RecordStore;
