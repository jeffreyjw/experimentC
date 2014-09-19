define([
    "gaslib/Point"
], function(Point){


    var Node = function(){
        this.position = new Point();
        this.caption = "Node";
    };


    Node.constructor = Node;


    return Node;
});
