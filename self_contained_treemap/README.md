# self_contained_treemap

This is a (*nearly*) complete D3 project.

This hasn't been tested in non-chromium browsers.

# Screenshot

<img src="screenshot.png" alt="A D3 Treemap" width="300" height=auto>

# Needs Enhancements

-  Hover Effects for the <rect> elements do not register when hoving over <text> elements.
  -  I tried fixing this with disappearing text. When you hover over the text, the text dissappears (*there is a tooltip with the same info*) leaving the rect element to register the hover.
  - This... kind of worked. When you hovered over the individual characters of the text, this worked. However, the spaces between the characters didn't work.
  - This is also weird... if the hover effect for the <rect> breaks on the entire area of <text> element then why does the hover on the <text> element then get more specific to the text itself on the not the whole area?

- Transitions
 - Not going to lie, the filtering transition after selecting a state is awesome.
 - Unfortunately, the transition breaks with the hover effects.
 - Since the state filter often goes overtop the chart, after making a selection, the hover effect immediately takes action breaking the transition that is in action.

- Hover Effect on Light Colors
 - I'm not sure I *want* to fix this. I like how it looks today.
 - However, it *might* look better if the whiter smaller squares didn't have as signifcant color change... maybe.
