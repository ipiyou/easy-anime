var seekInput = document.querySelector(".inputC");
seekInput.addEventListener("input", () => {
  control.seek(control.duration * (seekInput.value / 300)); //seek 특정 시간으로 이동
});

var control = anime({
  targets: document.querySelectorAll(".sq"),
  translateX: 300,
  delay: function (el, i) {
    return i * 200;
  },
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  update: () => {
    seekInput.value = control.progress * 3;
  },
});

document.querySelector(".playB").onclick = control.play;
document.querySelector(".pauseB").onclick = control.pause;
document.querySelector(".restartB").onclick = control.restart;
document.querySelector(".reverseB").onclick = control.reverse;
