var Circle = anime({
  targets: document.querySelector(".circle"),
  width: "-=50px",
  easing: "easeInOutQuad",
  backgroundColor: "#514677", // 16진수,RGB,RGBA,HSL,HSLA  not available 색상 코드 ex) blue, red, white
  translateX: function () {
    return [0, anime.random(100, 500)];
  },
  translateY: function () {
    return [0, anime.random(100, 500)];
  },

  rotate: {
    value: "+=100",
  },
  direction: "alternate",
});

document.querySelector(".buttonE").onclick = Circle.restart;
