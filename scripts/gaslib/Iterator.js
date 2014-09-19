define([], function(){


    var Iterator = function(collection){
        this.collection = collection;
        this.position = -1;
    };


    Iterator.constructor = Iterator;


    Iterator.prototype.getElement = function (position) {
      return this.collection[position];
    };


    Iterator.prototype.getSize = function () {
      return this.collection.length;
    };


    return Iterator;
});
