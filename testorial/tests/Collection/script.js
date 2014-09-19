require([
    "gaslib/Collection"
], function(Collection){

    QUnit.test( "Collection example", function( assert ) {
        var collection = new Collection();

        iterator = collection.iterator();
        position = iterator.position;
        assert.equal(position, -1, 'Iterator should be on -1 position')

    });

});


