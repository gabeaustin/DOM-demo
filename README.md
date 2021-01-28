# Manipulating the DOM Notes

## Document Functions

### Creating new HTML Elements (examples):
* ``document.createElement("tag");``
* ``document.createTextNode("Some text here");``

### Adding / Removing Elements:
* ``document.body.appendChild("someElement");``
* ``document.body.insertBefore("someElement");``
* ``document.body.removeChild("someElement");``
* ``someElement.remove();``

### Code Example: Creating a Paragraph:
``let paragraph = document.createElement("p");``
1. Creating a variable and setting it equal to the creation of a paragraph element on the document.

``let text = document.createTextNode("This would be an example of some paragraph text!);``
2. Creating a variable and setting it equal to the creation of a string of text.

``paragraph.appendChild(text);``
3. Appending the text (placing the text) into the paragraph element.

### DOM Workflow
1. Create Element
2. Modify / Append Element
3. Insert Element to Document

* **NOTE: Whichever element that will have something go into it will ALWAYS be written on the left (or written first) of the .appendChild() function. For the text to be inside the paragaraph, it is written:
`` paragraph.appendChild(text)``.

* Examples:
    1. Create Element:
    - ``let paragraph = document.createElement("p");``
    2. Modify / Append Element:
    - ``paragraph.style.color = "red";``
    - ``paragraph.style.textTranform = "uppercase";``
    - ``paragraph.className = "grid-square";``
    3. Insert the Element
    - ``paragraph.appendChild(text);``
    - ``document.body.appendChild(paragraph);``

### Styling the DOM
* Ways to adjust the style of an element:
    1. By giving an element a class:
    - ``let h1 = document.createElement("h1");``
    - ``h1.className = "awesome-h1";``
    2. By giving an element an ID:
    - ``h1.id = "main-heading";``
    3. Through inline styling, setting indiv. properties:
    - ``h1.style.color = "blue";``
    - ``h1.style.textTransform = "uppercase";``
    - ``h1.style.fontSize = "4em";``

### Waiting Time
* DOM Elements can't be manipulated (meaning: retrieved, added, removed, or styled) until the browser has finished loading the HTML document.

* DOMContentLoaded:
``document.addEventListener("DOMContentLoaded", function() {``
    ``let div = document.createElement("div");``
    ``div.innerText = "This is a div";``
    ``document.body.appendChild(div);``
``});``

