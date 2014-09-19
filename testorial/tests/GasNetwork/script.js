require([
    "gaslib/GasNetwork",
], function(GasNetwork){

    QUnit.test( "GasNetwork example", function( assert ) {
        var gasNetwork = new GasNetwork();

        gasPipes = gasNetwork.pipes.__collection.length;
        gasNodes = gasNetwork.nodes.__collection.length;

        assert.equal(gasPipes, 0, 'There should be no pipes');
        assert.equal(gasNodes, 0, 'There should be no nodes');
    });

});


