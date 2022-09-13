var Circle = anime({
  targets: document.querySelector(".circle"),
  keyframes: [
    {
      width: "+=50",
      translateX: 100,
      duration: 1000,
    },
    {
      height: "+=50",
      translateY: 100,
      duration: 1000,
    },
    {
      width: "+=50",
      translateX: 200,
      duration: 1000,
    },
    {
      height: "+=50",
      translateY: 200,
      duration: 1000,
    },
  ],
  // 개인 취향에 따라
  translateX: [
    { value: "+=100", duration: 1000 },
    { value: "+=100", duration: 1000 },
  ],
  translateY: [
    { value: "+=100", duration: 1000 },
    { value: "+=100", duration: 1000 },
  ],
});

document.querySelector(".buttonE").onclick = Circle.restart;
