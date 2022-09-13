var ti = anime.timeline({
  targets: document.querySelectorAll(".tag"),
  easing: "easeOutExpo",
  duration: 500,
  delay: function (el, i) {
    return i * 200;
  },
  loop: true,
  direction: "alternate",
});

ti.add({
  translateX: 200,
  easing: "spring",
})
  .add({
    opacity: 0.5,
    scale: 2,
  },"-=500") // 이전 애니메이션이 끝나기 0.5초전에 실행
  .add({
    targets: document.querySelector(".tri"),
    rotate: 180, // 오버라이딩
  })
  .add({
    translateX: 0,
    scale: 1,
  },3000); // 시작후 3초후 실행

document.querySelector(".buttonE").onclick = ti.restart;
