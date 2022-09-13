var Circle = anime({
  targets: document.querySelectorAll(".circle"),
  translateX: {
    value: 200,
    duration: 800,
  },
  rotate: {
    value: 300,
    duration: 1000,
    easing: 'easeInOutSine'
  },
  delay: function(el,i,l) { // element, index , length
    console.log(el,i,l)
    return i * 100
  },
  endDelay: 1000,
  scale: {
    value: 0.5,
    easing: 'easeInOutQuart'
  },
  direction: 'althernate',
});

var Num = anime({
  targets: document.querySelector('.num'),
  innerHTML: [0,100],
  rount: 1,
  easing: "linear"
})


document.querySelector(".buttonE").onclick = () => {
  Circle.restart();
  Num.restart();
}
  
