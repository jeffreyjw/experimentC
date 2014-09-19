define([
    "gaslib/Point"
], function(Point){


    var Node = function(){
        this.position = new Point();
        this.__caption = "Node";
    };


    Node.constructor = Node;

    Node.prototype.setCaption = function (caption) {
      this.__caption = caption;
    };

    Node.prototype.getCaption = function () {
      return this.__caption;
    };

    return Node;
});
