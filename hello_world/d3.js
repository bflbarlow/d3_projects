// var svg = d3.select("#dataviz_area")
// //height=200
// //width=450
// 
// // Create a scale: transform value in pixel
// var x = d3.scaleLinear()
//     .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
//     .range([0, 450]); // This is the corresponding value I want in Pixel
// // Try console.log( x(25) ) to see what this x function does.
// 
// var y = d3.scaleLinear()
//     .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
//     .range([200, 0]); // This is the corresponding value I want in Pixel
// // Try console.log( x(25) ) to see what this x function does.
// 
// svg.call(d3.axisBottom(x));
// 
// svg.append("circle")
//   .attr("cx", x(0)).attr("cy", y(0)).attr("r", 40).style("fill", "blue");
// svg.append("circle")
//   .attr("cx", x(50)).attr("cy", y(50)).attr("r", 40).style("fill", "red");
// svg.append("circle")
//   .attr("cx", x(100)).attr("cy", y(100)).attr("r", 40).style("fill", "green");

// set the dimensions and margins of the graph
var margin = {top: 10, right: 40, bottom: 30, left: 30},
    width = 450 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

console.log(width);

// append the svg object to the body of the page
var sVg = d3.select("#Area")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  // translate this svg element to leave some margin.
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X scale and Axis
var x = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, width]);       // This is the corresponding value I want in Pixel

// X scale and Axis
var y = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([height, 0]);       // This is the corresponding value I want in Pixel

sVg
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

sVg
  .append('g')
  .call(d3.axisLeft(y));

var data = [ {x:10, y:20}, {x:40, y:90}, {x:80, y:50} ];

sVg
  .selectAll("whatever")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d){ return x(d.x) })
    .attr("cy", function(d){ return y(d.y) })
    .attr("r", 7)
    .style("fill", "green")

console.log("test");