1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById is a single element object. Target of this object element is selects ID only. IDs are supposed to be unique in a page, so you’ll usually only get one element. No need for # prefix (unlike CSS selectors).

getElementsByClassName is an HTMLCollection (like an array, but not exactly).

querySelector can select by id, class, tag, attribute, etc.

querySelectorAll is a static NodeList.

2. How do you **create and insert a new element into the DOM**?

Answer:
To add a new element to a webpage using JavaScript, you first make the element with document.createElement(). Then you can give it text, an ID, a class, or other settings to describe it. After that, you put it into the page by using methods like appendChild() to add it at the end, prepend() to add it at the start, or insertBefore() to place it before another element. This lets you change and build the webpage while it is running.

3. What is **Event Bubbling** and how does it work?

Answer:
Event bubbling is a way that events travel through the elements of a webpage. When you click or trigger an event on a child element, the event first happens on that element, then it “bubbles up” to its parent, then to the parent’s parent, and so on until it reaches the top of the document. For example, if you click on a button inside a <div>, the click event first runs on the button, then on the `<div>`, and then on the <body> and <html>. This is useful because it allows parent elements to handle events from their children without needing to attach event listeners to every single child element.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:
Event delegation is a technique in JavaScript where instead of adding event listeners to many child elements, you add a single event listener to their parent element. Since events bubble up through the DOM, the parent can “catch” the event when it happens on any of its children, and then you check which child triggered it. This is useful because it makes the code faster and easier to manage, especially when you have many child elements or when new elements are added dynamically. It reduces memory usage, avoids attaching too many listeners, and keeps your code cleaner.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
The `preventDefault()` and `stopPropagation()` methods are both used in event handling, but they serve different purposes. The `preventDefault()` method stops the browser’s default action that belongs to an event from happening; for example, it can stop a link from navigating to another page or prevent a form from submitting. On the other hand, the `stopPropagation()` method stops the event from bubbling up or trickling down the DOM tree, meaning it prevents the event from being passed on to parent or ancestor elements. In short, `preventDefault()` controls the browser’s default behavior, while `stopPropagation()` controls how the event moves through the DOM.
