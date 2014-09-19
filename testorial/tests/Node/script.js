require([
    "gaslib/Node"
], function(Node){

    QUnit.test( "Node example", function( assert ) {
        var node = new Node();

        assert.equal(node.position.lat, 0, 'Initially latidude is 0');
        assert.equal(node.position.lng, 0, 'Initially langtiude is 0');

        assert.equal(node.getCaption(), "Node", 'Node is Initially named "Node"');

        node.setCaption('Rura');
        assert.equal(node.getCaption(), 'Rura', 'Caption should change to "Rura"');
    });

});


