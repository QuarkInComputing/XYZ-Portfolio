const display = document.getElementById('helloworld');

const aboutButton = document.getElementById('aboutbutton');
const myworkButton = document.getElementById('myworkbutton');
const blogButton = document.getElementById('blogbutton');

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
        index++;
    }, 55);
}

aboutButton.addEventListener('mouseover', () => helloWorld("About Me"));
myworkButton.addEventListener('mouseover', () => helloWorld("My Work"));
blogButton.addEventListener('mouseover', () => helloWorld("The Blog"));
