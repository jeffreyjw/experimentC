require([
    "maplib/MapDrawer",
    "gaslib/Point"
], function(MapDrawer, Point){

    QUnit.test( "a basic test example", function( assert ) {

        var element = document.getElementById("map");
        var drawer = new MapDrawer(element);
        drawer.init();

        drawer.drawMarker(
            new Point(52.23, 21.06),
            {
                caption: "Warszawa" // hold mouse on marker to see caption
            }
        );

        assert.equal( "got here", "got here", "We expect to get here" );
    });

});


