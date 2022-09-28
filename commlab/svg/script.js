let red = document.getElementById("layer1");
let orange = document.getElementById("layer2");
let yellow = document.getElementById("layer3");
let green = document.getElementById("layer4");
let indigo = document.getElementById("layer5");
let blue = document.getElementById("layer6");

let color1, color2, color3, color4, color5, color6 = 0;

red.addEventListener("click", () => {
    if (color1 == 1) {
        layer1.style.fill = getRandomColor();
    }
    else {
        layer1.style.fill='red';
        color1 = 1;
    }
})

orange.addEventListener("click", () => {
    if (color2 == 1) {
        layer2.style.fill = getRandomColor();
    }
    else {
        layer2.style.fill='orange';
        color2 = 1;
    }
})

yellow.addEventListener("click", () => {
    if (color3 == 1) {
        layer3.style.fill = getRandomColor();
    }
    else {
        layer3.style.fill='yellow';
        color3 = 1;
    }
})

green.addEventListener("click", () => {
    if (color4 == 1) {
        layer4.style.fill = getRandomColor();
    }
    else {
        layer4.style.fill='green';
        color4 = 1;
    }
})

indigo.addEventListener("click", () => {
    if (color5 == 1) {
        layer5.style.fill = getRandomColor();
    }
    else {
        layer5.style.fill='blue';
        color5 = 1;
    }
})

blue.addEventListener("click", () => {
    if (color6 == 1) {
        layer6.style.fill = getRandomColor();
    }
    else {
        layer6.style.fill='purple';
        color6 = 1;
    }
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }