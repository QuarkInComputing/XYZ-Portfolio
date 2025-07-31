const display = document.getElementById('helloworld');
const smalldisplay = document.getElementById('smallhelloworld');

const aboutButton = document.getElementById('aboutbutton');
const myworkButton = document.getElementById('myworkbutton');
const blogButton = document.getElementById('blogbutton');

const aboutLink = document.getElementById('aboutlink');
const myworkLink = document.getElementById('myworklink');
const blogLink = document.getElementById('bloglink');

let isAnimating = false;

function helloWorld(text) {
    if (isAnimating) return; 

    isAnimating = true;
    let index = 1;

    const interval = setInterval(() => {
        if (index > text.length) {
            clearInterval(interval);
            isAnimating = false; 
            return;
        }
        display.textContent = text.substring(0, index);
        smalldisplay.textContent = text.substring(0, index);
        index++;
    }, 55);
}

aboutButton.addEventListener('mouseover', () => helloWorld("About Me"));
myworkButton.addEventListener('mouseover', () => helloWorld("My Work"));
blogButton.addEventListener('mouseover', () => helloWorld("The Blog"));

aboutLink.addEventListener('mouseover', () => helloWorld("About Me"));
myworkLink.addEventListener('mouseover', () => helloWorld("My Work"));
blogLink.addEventListener('mouseover', () => helloWorld("The Blog"));
