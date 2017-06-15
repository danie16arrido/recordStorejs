var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');


describe("RecordStore", function(){
  var record;
  var recordStore;

  beforeEach(function(){
    record = new Record("test", "x&y", "chillout", 9.99);
    record1 = new Record("test2", "x&y&z", "chillout-more", 19.99);
    recordStore = new RecordStore("dans record store", "Gotham city");
  });

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "dans record store");
  });

  it("should have a city", function () {
    assert.strictEqual(recordStore.city, "Gotham city")
  });

  it("should have an inventory", function(){
    assert.deepEqual(recordStore.inventory, []);
    assert.strictEqual(recordStore.inventory.length, 0);

  });

  it("should have a balance 0 at init", function(){
    assert.strictEqual(recordStore.balance, 0 );
  });

  it("should be able to add records to inventory", function(){
    recordStore.add(record);
    assert.strictEqual(recordStore.inventory.length, 1);
  });

  it("should be able to list the inventory", function(){
    recordStore.add(record);
    var result = "1. test, x&y, chillout, £9.99"
    assert.strictEqual(recordStore.listInventory(), result);
  });

  it("should list multipley items ", function(){
    recordStore.add(record);
    recordStore.add(record1);
    var result = "1. test, x&y, chillout, £9.99\n2. test2, x&y&z, chillout-more, £19.99";
    assert.strictEqual(recordStore.listInventory(), result);
  });

  it("should be able to remove a record from inventory", function(){
    recordStore.add(record);
    recordStore.remove(record);
    assert.strictEqual(recordStore.inventory.length, 0);
  })

  it("should be able to modify balance", function(){
    recordStore.modifyBalance(10);
    assert.strictEqual(recordStore.balance, 10);
  });

  it("should be able to sell a record", function(){
    recordStore.add(record);
    recordStore.sell(record);
    assert.strictEqual(recordStore.balance, record.price);
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it("should be able to sell a record that exists", function(){
    assert.strictEqual( false ,recordStore.sell(record));
  });

  it("should be able to print finance data", function(){
    var result = "Balance: £0 Inventory: £0";
    assert.strictEqual(recordStore.financeData(), result);
  });

  it("should get the inventory value ", function(){
    recordStore.add(record);
    assert.strictEqual(recordStore.inventoryValue(), record.price);
  });

  it("should get the inventory value with multiple items", function(){
    recordStore.add(record);
    recordStore.add(record1);
    assert.strictEqual(recordStore.inventoryValue(), 29.98);
  });







})
