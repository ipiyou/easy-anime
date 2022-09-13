var rec = document.querySelectorAll(".blue, .red")
var charg = document.querySelector(".charge")

var ChargeObj = {
    charge: 0,
}

var Circle = anime({
  targets: [rec,document.querySelector('.black'),ChargeObj],
  charge: 100,
  round: 1,
  easing: 'linear',
  update: () => {
    charg.innerHTML = JSON.stringify(ChargeObj.charge)
  },
  translateX: 200,
});

document.querySelector(".buttonE").onclick = Circle.restart;
