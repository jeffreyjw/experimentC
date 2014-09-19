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
                caption: "Warszawa", // hold mouse on marker to see caption
                content: "<h1>Warszawa</h1><p> - the capital city of Poland</p>" // click on the marker to see popup
            }
        );

        assert.equal( "got here", "got here", "We expect to get here" );
    });

});


