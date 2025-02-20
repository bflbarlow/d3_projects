// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 1100 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#data_viz_area")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Parse the Data
d3.csv("https://raw.githubusercontent.com/bflbarlow/d3_projects/refs/heads/main/bar_chart/data/data.csv").then( function(data) {

  // sort data
  data.sort(function(b, a) {
    return a.Value - b.Value;
  });

  // get max
  var max = d3.max(data, function(d) { return +d.Value;} );;

  // console.log(max);

  // create X axis
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(d => d.Category))
    .padding(0.2);

  // create Y axis
  var y = d3.scaleLinear()
    .domain([0, max*1.1])
    .range([ height, 0]);

  // add Y axis to graph (g)
  svg.append("g")
    .call(d3.axisLeft(y));

  // add X axis to graph (g) with labels
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // create and add bars
  svg.selectAll("mybar")
    .data(data)
    .join("rect")
      .attr("x", d => x(d.Category))
      .attr("y", d => y(d.Value))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.Value))
      .attr("fill", "#69b3a2")

})