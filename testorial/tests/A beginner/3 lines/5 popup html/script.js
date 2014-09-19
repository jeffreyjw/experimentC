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
                popup: '<h1>Popup title</h1><p>This is a <span style="color: #fdac9f;">sweet</span> popup!</p>' // click on the line to see the popup
            }
        );

        assert.equal( "got here", "got here", "We expect to get here" );
    });

});


