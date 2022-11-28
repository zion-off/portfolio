document.addEventListener("DOMContentLoaded", function () {
    typeWriter();
});

var i = 0;
var txt = 'here lies a visual exploratoion of \n my selfhood. peek around -- theres \n things you havent seen before.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("name-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        commlabfunction();
    }
}

var j = 0;
var commlabtext = 'throughout the semester, ive \n worked on multiple creative \nprojects. this link will guide\n you to everything ive created\n so far. my imagination now\n lives in a cloudspace.';
var commspeed = 80;

function commlabfunction() {
    if (j < commlabtext.length) {
        document.getElementById("commlab-text").innerHTML += commlabtext.charAt(j);
        j++;
        setTimeout(typeWriter, commspeed);
    }
}

// create canvas element and append it to document body
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.height = '100%';
canvas.style.zIndex = '10';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}