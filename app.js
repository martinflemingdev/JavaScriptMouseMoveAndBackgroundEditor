// variables
const color = document.getElementById("color");
const randomBtn = document.getElementById("btn-random");
const increaseBtn = document.getElementById("btn-increase");
const decreaseBtn = document.getElementById("btn-decrease");
const mousex = document.getElementById("mousex");
const mousey = document.getElementById("mousey");

// initial random colors
document.body.style.backgroundColor = randomColor();

function randomColor() {
    let randomRGB = "rgb("
    randomRGB+= Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')';
    return color.textContent = randomRGB;
}

// button event listeners
randomBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    let thisColor = document.body.style.backgroundColor;
    color.textContent = thisColor;
})

increaseBtn.addEventListener("click", () => {
    const currentColor = document.body.style.backgroundColor;
    let rgb = currentColor.split(",");
    let r = parseInt(rgb[0].substr(4)) +1;
    let g = parseInt(rgb[1]) +1;
    let b = parseInt(rgb[2]) +1;
    if (r > 255) {
        r = 255;
    }
    if (g > 255) {
        g = 255;
    }
    if (b > 255) {
        b = 255;
    }
    let newColor = 'rgb(' + (r) + ',' + (g) + ',' + (b) + ')';
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})

decreaseBtn.addEventListener("click", () => {
    let currentColor = document.body.style.backgroundColor;
    let rgb = currentColor.split(",");
    let r = parseInt(rgb[0].substr(4)) -1;
    let g = parseInt(rgb[1]) -1;
    let b = parseInt(rgb[2]) -1;
    if (r < 0) {
        r = 0;
    }
    if (g < 0) {
        g = 0;
    }
    if (b < 0) {
        b = 0;
    }
    let newColor = 'rgb(' + (r) + ',' + (g) + ',' + (b) + ')';
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})

document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    mousex.textContent = x;
    mousey.textContent = y;
})