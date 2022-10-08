console.clear();

var ww = window.innerWidth;
var wh = window.innerHeight;


var action = gsap.timeline({
  scrollTrigger: {
    trigger: "#sec01",
    scrub:0.3,
    start: "top top",
    end: "bottom top"
  }
})  
.to("#circle", {
  motionPath:{
    path:[ {x:-ww*0.2, y:-wh*0.5}, {x:3, y:-wh-20}],
    curviness:1
  },
  duration:3,
  ease:"none"
})