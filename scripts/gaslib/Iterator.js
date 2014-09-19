define([], function(){


    var Iterator = function(collection){
        this.collection = collection;
        this.position = -1;
    };


    Iterator.constructor = Iterator;


    return Iterator;
});
