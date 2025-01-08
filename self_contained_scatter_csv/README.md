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
