### 6. Answer the following questions clearly:

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

4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
