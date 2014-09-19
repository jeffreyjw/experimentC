require([
    "gaslib/Angle"
], function(Angle){

    QUnit.test( "radian to degree", function( assert ) {

        var radians = Math.PI;
        var degrees = Angle.radianToDegree(radians);

        assert.equal(degrees, 180, "Radian to degree not working properly" );
    });

});


