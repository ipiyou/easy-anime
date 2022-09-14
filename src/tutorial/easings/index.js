function InputValue() {
  var value = document.querySelector(".inputC").value;
  document.querySelector(".inputC").value = "";
  return value ? value : "easeInQuad";
}

function changeEasing() {
  anime({
    targets: document.querySelectorAll(".sq"),
    translateX: [0, 300],
    translateY: [0, 300],
    delay: 100,
    loop: 3,
    direction: "alternate",
    easing: InputValue(),
  });
}

var custom = anime({
  targets: document.querySelectorAll(".sqf"),
  translateX: 300,
  direction: "alternate",
  easing: function (el, i) {
    return function (t) {
      return t * (i + 1); // 빠른 시간? 
    };
  },
});

document.querySelector(".restartB").onclick = changeEasing;
document.querySelector(".fB").onclick = custom.restart;
