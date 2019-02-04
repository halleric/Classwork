
$("#document").ready(function(){

    $("#button").click(function(){

        calculateMidpoint();
    
    })

});


var calculateMidpoint = function(){

    var x1 = parseInt($("#inbput1").val());
    var x2 = parseInt($("#inbput2").val());
    var y1 = parseInt($("#inbput3").val());
    var y2 = parseInt($("#inbput4").val());
    var x3 = parseInt($("#inbput5").val());
    var y3 = parseInt($("#inbput6").val());

    midpoint(x1, y1, x2, y2);
    midpoint(x2, y2, x3, y3);
    midpoint(x1, y1, x3, y3);

}

var midpoint = function( x1, y1, x2, y2 ){

    var midpointX = (x1 + x2)/2;
    var midpointY = (y1 + y2)/2;

$("output").append("The midpoint is: (" + midpointX + "," + midpointY + ")");
}