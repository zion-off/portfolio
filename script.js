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