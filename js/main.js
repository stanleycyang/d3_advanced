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
      return Math.random() * window.innerWidth;
    }).attr("cy", function(){
      return Math.random() * window.innerHeight;
    }).each('end', repeat);
  })();
}

//var rectangle = d3.select("svg").append("rect").attr("x", 10).attr("y", 10).attr("width", 100).attr("height", 100).attr("fill", "red");

//var ellipse = d3.select("svg").append("ellipse").attr("cx", 200).attr("cy", 200).attr("rx", 200).attr("ry", 100).attr("fill", "brown");

//var line = d3.select("svg").append("line").attr("x1", 50).attr("y1", 50).attr("x2", 5000).attr("y2", 5000).attr("stroke", "blue").attr("stroke-width", 2);
