"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    // Get the text, and split it into an array
    let coolText = document.querySelector("#cooltext");
    const contentText = coolText.textContent;
    const splitText = contentText.split('');
    
    // Empty the HTML tag containing the text
    coolText.textContent = "";
     
    splitText.forEach((letter, index) => {
        // Create a span element for each letter, and add the animation
        const span = document.createElement("span");
        span.classList.add("fade_in");

        // Set the animation delay to the index of the span
        span.style.setProperty("--delay", index);
    
        // Makes sure that the spaces doesn't collapse 
        if (letter === " ") {
            span.innerHTML = "&nbsp;";
        } 
        // Otherwise sets the content of the spans to the letters
        else {
            span.textContent = letter;
        }

        // Add the spans to the HTML tag
        coolText.append(span); 
    });
}