#D3 Advanced

Objectives: 
- Learning to use D3 with SVGs

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
	