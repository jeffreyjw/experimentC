define([], function(){


    var Angle = function(){};


    Angle.degreeToRadian = function(degree){
        return (degree * Math.PI) / 180;
    };


    Angle.radianToDegree = function(radian){
        return (radian * 180) / Math.PI;
    };


    return Angle;

});
