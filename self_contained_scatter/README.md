# self_contained_scatter

One of the most frustrating pieces of developing in D3 is databinding, especially via d3.csv() or d3.json().

I wanted to explore a way that a self-contained page (*all in a single html file*) could render a JSON file that has been added to it.

It is important to note that this ***particular*** code in this self_contained_scatter directory is for a scatter plot that takes in very specifically modeled JSON.

# Instructions

1) Copy the index.html file locally
2) Copy the simple.json file locally
3) Open that index.html file in a browser
4) With the "Choose File", select the simple.json file
5) Watch the page render the data in that simple.json file

# Why is this helpful?

- For quick prototyping of a single unique D3 chart
- For quick validation against different and unique JSON files
