var Record = function( artist, title, genre, price ){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype = {
  printProperties: function(){
    var string = this.artist + ", "
    + this.title + ", "
    + this.genre + ", £"
    + this.price;
    return string;
  }
}

module.exports = Record;
