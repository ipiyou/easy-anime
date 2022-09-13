var Circle = anime({
  targets: document.querySelector(".circle"),
  marginLeft: "240px",
  translateX: 250,
  scale: 0.5,
  rotate: "5turn",
  backgroundColor: "#FFF",
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
});

var Input = anime({
  targets: document.querySelector(".inputE"),
  value: [0, 1000],
  round: 1,
  easing: "easeInOutExpo",
});

document.querySelector(".buttonE").onclick = () => {
  Circle.restart();
  Input.restart();
}