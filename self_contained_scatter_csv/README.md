# self_contained_scatter_csv

Similar to the [self_contained_scatter](https://github.com/bflbarlow/d3_projects/tree/main/self_contained_scatter) which uses a JSON file, this one takes a csv file.

One of the most frustrating pieces of developing in D3 is databinding, especially via d3.csv() or d3.json().

I wanted to explore a way that a self-contained page (*all in a single html file*) could render a csv file that has been added to it.

It is important to note that this ***particular*** code in this self_contained_scatter_csv directory is for a scatter plot that takes in very specifically modeled csv. Below is a sample of csv that can be used in a file that can be used in this project.

```
x,y,z
12,34,56
56,78,90
90,12,34
34,56,78
78,90,12
```

# Instructions

1) Copy the index.html file locally
2) Copy the simple.csv file locally
3) Open that index.html file in a browser
4) With the "Choose File", select the simple.csv file
5) Watch the page render the data in that simple.csv file

# Why is this helpful?

- For quick prototyping of a single unique D3 chart
- For quick validation against different and unique csv files

# Things you can do to tweak

- Change Dot Colors
  - In your csv, create a column called "color"
  - Populate that column with [css color name](https://www.w3schools.com/css/css_colors.asp)
  - Change the .style to be `.style("fill", function(d){ return d.color});`
  - This will color each dot with their respective colors in the csv.
 
- Change Dot Size
  - In your csv, create a column called "size"
  - Populate that column with values between 1 and 10
    - 0 will essentially give the dot a "nothing" size. But play aroound with it!
  - Change the radius .attr to be `.attr("r", function(d){ return d.size })`
  - This will give the corresponding radius (size) for each dot from the csv.
  - Use the browser's inspect tool to see how it gets rendered in the DOM (HTML).
    - In each circle tag (an svg element) the r="" is an attribute giving that circle its radius.
     
- Experiment With csv Size
  - How many dots (records in the csv) can be rendered?
  - What can be done to make this index.html file more efficient in processing a large csv?
  - After removing the `console.log()`, `<pre id="output"></pre>`, and the `document.getElementById('output').innerText = content;`, I was able to render 1 million dots in the scatter plot in roughly 4 seconds.

- Use Other Columns
  - In the simple.csv file, there is a z column.
  - Change either the cx or cy coordinates to use the z column instead.
    - `.attr("cx", function(d){ return x(d.z) })`
    - `.attr("cy", function(d){ return x(d.z) })`
