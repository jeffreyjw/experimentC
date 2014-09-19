define([
    "gaslib/Iterator"
], function(Iterator){

    var Collection = function(){
        this.__collection = [];
    };


    Collection.constructor = Collection;


    Collection.prototype.add = function(element){
        this.__collection.push(element);
    };

    Collection.prototype.getIterator = function() {
      iterator = new Iterator(this.__collection);
      return iterator;
    };


    return Collection;
});
