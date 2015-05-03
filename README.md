#D3 Advanced

Objectives: 

- Learning to use D3 with SVGs
- Make circles, rectangles, ellipses, polygons, and polylines in SVG
- Implement D3 on them

###What is a SVG?

Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999. SVG images and their behaviors are defined in XML text files.


###Create circles using D3

Start with your `index.html`

	<!DOCTYPE html>
	  <html>
	    <head>
	      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	
	      <title>Advance D3</title>
	      <link rel="stylesheet" href="css/style.css" />
	    </head>
	    <body>
	    	<svg width="100%" height="100%">
		      <circle cx="40" cy="60"></circle>
		      <circle cx="80" cy="60"></circle>
		      <circle cx="120" cy="60"></circle>
		    </svg>
		    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
		    <script type="text/javascript" charset="utf-8" src="js/main.js"></script>
	    </body>
	  </html>

In the `style.css`

	html, body{
	  width: 100%;
	  height: 100%;
	}

In your `main.js`

	var circle = d3.selectAll("circle");

	circle.style("fill", "steelblue");
	circle.attr("r", 30);


This is the same as the following

	<svg width="100%" height="100%">
	  <circle cx="40" cy="60" r="30" style="fill:steelblue;"></circle>
	  <circle cx="80" cy="60" r="30" style="fill:steelblue;"></circle>
	  <circle cx="120" cy="60" r="30" style="fill:steelblue;"></circle>
	</svg>

###Randomize the circle locations

Try and change the locations of the circles randomly

	function setRandomCircleLocations(){
	  circle.attr("cx", function(){
	    return Math.random() * 720;
	  }).attr("cy", function(){
	    return Math.random() * 120;
	  });
	}
	
	setRandomCircleLocations();	 

Add animations to it

	function setRandomCircleLocations(){
	  circle.transition().duration(500).ease("linear").attr("cx", function(){
	    return Math.random() * 720;
	  }).attr("cy", function(){
	    return Math.random() * 120;
	  });
	}

###Continuing the animating craziness

	var circle = d3.selectAll("circle");

	circle.style("fill", "steelblue").attr("r", 30).each(setRandomCircleLocations);
	
	function setRandomCircleLocations(){
	  (function repeat(){
	    circle.transition().duration(500).ease("linear").attr("cx", function(){
	      return Math.random() * 720;
	    }).attr("cy", function(){
	      return Math.random() * 120;
	    }).each('end', repeat);
	  })();
	}

###Bringing back data

Let's use data to set your circle size

	circle
		.style("fill", "steelblue")
		.data([32, 57, 112])
		.attr("r", function(d){return Math.sqrt(d);})
		.each(setRandomCircleLocations);

###Activity

	Try and figure out how to randomize the radius of the circles
	
####Solution

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

###Activity

Try and make the circles fly in the whole window!
	
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

###Making rectangles

Let's comment out all the code so far related to circles. Between your SVG tag add:

	<rect x='0' y='0' width='50' height='50' fill='green' />

###Activity	

	Try and create a rectangle in your code using D3
	
####Solution

	var rectangle = d3.select("svg").append("rect").attr("x", 10).attr("y", 10).attr("width", 100).attr("height", 100).attr("fill", "red");

###Making an ellipse

Knowing this is how me make an ellipse...

	<ellipse cx="180" cy="100" rx="50" ry="50" fill="blue" />

###Activity

	Make an ellipse using D3

###Solution

	var ellipse = d3.select("svg").append("ellipse").attr("cx", 200).attr("cy", 200).attr("rx", 200).attr("ry", 100).     attr("fill", "brown");
	
###Drawing lines

	<line x1="400" y1="5" x2="40" y2="40" stroke="gray" stroke-width="5" />

###Activity

	Make a line using D3
	
###Solution

	var line = d3.select("svg").append("line").attr("x1", 50).attr("y1", 50).attr("x2", 5000).attr("y2", 5000).attr("stroke", "blue").attr("stroke-width", 2);

###Making a polygon and polyline

	<polygon fill="yellow" stroke="black" stroke-width="1" points="05,30 15,10 25,30"></polygon>
	
	<polyline fill="none" stroke="blue" stroke-width="2" points="05,30 15,30 15,20 25,20 25,10 35,10" />
	
###Activity

	Make a polygon and polyline in D3


###You are now able to make some amazing things in D3!