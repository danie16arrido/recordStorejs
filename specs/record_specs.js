var assert = require('assert');
var Record = require('../record.js');

describe("record", function(){
  var record;
  beforeEach(function(){
    record = new Record("test", "x&y", "chillout", 9.99);
  });

  it("should have an artist", function(){
    assert.strictEqual(record.artist, "test");
  });

  it("should hava a title", function(){
    assert.strictEqual(record.title, "x&y");
  });

  it("should have a genre", function(){
    assert.strictEqual(record.genre, "chillout");
  });

  it("should hava a price", function(){
    assert.strictEqual(record.price, 9.99);
  });

  it("should have print a record summary", function(){
    assert.strictEqual(record.printProperties(), "test, x&y, chillout, £9.99")
  })

});
