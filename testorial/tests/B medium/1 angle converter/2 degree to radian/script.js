require([
    "gaslib/Angle"
], function(Angle){

    QUnit.test( "degree to radian", function( assert ) {

        var degrees = 180;
        var radians = Angle.degreeToRadian(degrees);

        assert.equal(radians, Math.PI, "Degree to radian not working properly" );
    });

});


