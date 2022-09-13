var Circle = anime({
  targets: document.querySelector(".circle"),
  translateX: 250,
  direction: "alternate", // 양쪽 ,reverse 반전 not use 기본
  loop: true, // true or number
  easing: 'easeInOutSine',
  autoplay: true //에니메이션 자동 실행
});
