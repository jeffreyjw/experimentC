require([
    "gaslib/Pipe"
], function(Pipe){

    QUnit.test( "Pipe example", function( assert ) {
        var pipe = new Pipe();
        assert.equal(pipe.flow, 0, 'Initially pipe flow is 0');
        assert.equal(pipe.maxFlow, 0, 'Initially max pipe flow is 0');

        pipe.flow = 100;
        pipe.maxFlow = 10;

        assert.equal(pipe.usage(), 10, 'It should equal 10');

        pipe.maxFlow = 0;
        assert.equal(pipe.usage(), 0, 'It should equal 0');
    });

});


