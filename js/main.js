var circle = d3.selectAll("circle");

circle.style("fill", "steelblue").data([32, 57, 112]).attr("r", function(d){return Math.sqrt(d);}).each(setRandomCircleLocations);

function setRandomCircleLocations(){
  (function repeat(){
    var radius = [];

    for(var i = 0; i < 4; i++){
      var randomNumber = Math.random() * 100;
      radius.push(randomNumber);
    }

    circle.data(radius).transition().duration(500).ease("linear").attr("r", function(d){
      return d;
    }).attr("cx", function(){
      return Math.random() * 720;
    }).attr("cy", function(){
      return Math.random() * 120;
    }).each('end', repeat);
  })();
}

