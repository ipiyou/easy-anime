var Circle = anime({
  targets: document.querySelectorAll(".circle"),
  translateX: 200,
  translateY: anime.stagger(50,{grid: [1,5],from: 'first',axis: "y"}), // grid에 맞춰 입력한 거리별로 이동함
  delay: anime.stagger(300, {
    start: 500,
    from: "first", //from: center, first, last
    easing: "easeOutQuad",
    grid: [1, 5],
  }),
  scale: [
    { value: 0.2, easing: "easeOutSine", duration: 300 },
    { value: 1, easing: "easeInOutQuad", duration: 600 },
  ],
  rotate: anime.stagger([0, 360]),
});

document.querySelector(".buttonE").onclick = Circle.restart;
