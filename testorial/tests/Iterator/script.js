require([
    "gaslib/Iterator"
], function(Iterator){

    QUnit.test( "Iterator example", function( assert ) {
        
        var exampleCollection = [
          {test1: "Testing"},
          {test2: "Testing2"}
        ];

        var iterator = new Iterator(exampleCollection);

        assert.equal(iterator.getElement(0).test1, "Testing", 'First element should be equal to "Test1"');
        assert.equal(iterator.getElement(1).test2, "Testing2", 'Second element should be equal to "Test2"');

        size = iterator.getSize();

        assert.equal(size, 2, 'Size should be 2');
        
    });

});


