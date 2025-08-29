
### getElementById()

This is used to select HTML element with specific id. This returns a single element object. 


### getElementsByClassName()

This is used to select all HTML element with the class name. This returns a live HTML collection. 


### querySelector()

This returns the first element that matches a specified css selector. 

### querySelectorAll()

This returns all elements that match the specified CSS selector. This returns a node list. 



## Create and inserting a DOM element

We frist use `document.createElement()` to create the element first. Then we can add content to the element. Then we can use `parentDiv.appendChild()` to append the element as the last child. 


## Event Bubbling

Event bubbling is a way events travel in the DOM. When an event is triggered on an element it first runs the handlers on that element, and then it moves upward through the parent elements in the DOM until it reaches the document. 


## Event Delegation

In this technique you add a single event listener to the parent element to manage events for its child. 

This uses less event handler which means less memory uses. This also works for elements that were added later by the JavaScript. 


## preventDefault() and stopPropagation()

### preventDefault()

This prevents the browser's default action for the event. 

### stopPropagation()

This stops event from bubbling up in the DOM. 