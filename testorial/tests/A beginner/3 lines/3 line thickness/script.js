require([
    "maplib/MapDrawer",
    "gaslib/Point"
], function(MapDrawer, Point){

    QUnit.test( "a basic test example", function( assert ) {

        var element = document.getElementById("map");
        var drawer = new MapDrawer(element);
        drawer.init();

        drawer.drawLine(
            new Point(52.40, 16.90),
            new Point(52.23, 21.06),
            {
                weight: 8 // line has 8 pixels of width
            }
        );

        assert.equal( "got here", "got here", "We expect to get here" );
    });

});


