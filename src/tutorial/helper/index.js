anime({
  targets: document.querySelectorAll(".sq"),
  translateX: () => {
    return anime.random(0, 600);
  },
  loop: true,
  autoplay: true,
  direction: "alternate",
  duration: 2000,
});

anime({
  targets: document.querySelector('.out'),
  loop: true,
  translateX: 300,
  direction: 'alternate',
  update: () => {
    document.querySelector('.running').textContent = `running anime: ${anime.running.length}`
  },
  duration: 2000,
})

document.querySelector(".clickB").onclick = () => {
  anime.remove(document.querySelector(".sq:nth-child(3)"));
};

function loop(t){
  custom.tick(t)
  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

anime.suspendWhenDocumentHidden = false; // 가시성 일시 중지 기본적으로 true