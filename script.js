"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    let coolText = document.querySelector("#cooltext");
    const contentText = coolText.textContent;
    const splitText = contentText.split('');
    
    coolText.textContent = "";
     
    splitText.forEach((letter, index) => {
        const span = document.createElement("span");
        span.classList.add("fade_in");
        span.style.setProperty("--delay", index);
    
        if (letter === " ") {
            span.innerHTML = "&nbsp;";
        } else {
            span.textContent = letter;
        }

        console.log(span);
        coolText.append(span); 
    });
}