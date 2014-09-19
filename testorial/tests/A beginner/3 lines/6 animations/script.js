require([
    "maplib/MapDrawer",
    "gaslib/Point"
], function(MapDrawer, Point){

    QUnit.test( "a basic test example", function( assert ) {

        var element = document.getElementById("map");
        var drawer = new MapDrawer(element);
        drawer.init();
        drawer.initAnimations(); // without this animations will not work

        drawer.drawLine(
            new Point(52.40, 16.90),
            new Point(52.23, 21.06),
            {
                color: "#4444DD",
                speed: 1 // this higher the faster
            }
        );

        assert.equal( "got here", "got here", "We expect to get here" );
    });

});


