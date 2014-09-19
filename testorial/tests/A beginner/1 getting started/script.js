require([
    "maplib/MapDrawer"
], function(MapDrawer){

    QUnit.test( "a basic test example", function( assert ) {

        var element = document.getElementById("map");
        var drawer = new MapDrawer(element);
        drawer.init();

        assert.equal( "got here", "got here", "We expect to get here" );
    });

});


