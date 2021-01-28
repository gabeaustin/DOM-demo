// DOM Demo - Notes

// Create DOMContentLoaded - this waits for everything to be loaded
document.addEventListener("DOMContentLoaded", function(){
    // CREATE ELEMENT
    let paragraph = document.createElement("p");
    // create text
    let text = document.createTextNode("Any Notes Text.");

    // MODIFY / APPEND ELEMENT
    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    // add a class name to the paragraph
    paragraph.className = "some-paragraph";

    // INSERT ELEMENT
    // put/place the text into p element
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    // ADD BUTTON AND EVENT LISTENER
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    button.addEventListener("dblclick", function() {
        // everytime clicked, creates an H1
        let h1 = document.createElement("h1");
        let h1Text = document.createTextNode("I've been double clicked.");
        // puts text inside the element
        h1.appendChild(h1Text);
        // place text to the body 
        document.body.appendChild(h1);
    })
})

