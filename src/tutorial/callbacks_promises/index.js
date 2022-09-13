var prosessEl = document.querySelector(".prosess");
var updateEL = document.querySelector(".update");
var beganEl = document.querySelector(".began");
var completedEl = document.querySelector(".completed");
var loopbeganEl = document.querySelector(".loopbegan");
var loopcompletedEl = document.querySelector(".loopcompleted");
var changesEl = document.querySelector(".changes");
var changebeganEl = document.querySelector(".changebegan");
var changecompletedEl = document.querySelector(".changecompleted");
var promiseEl = document.querySelector(".promise");

var update = 0;

var callpro1 = anime({
  targets: document.querySelector(".sq1"),
  translateX: 300,
  delay: 1000,
  direction: "alternate",
  easing: "easeInOutSine",
  update: (el) => {
    prosessEl.textContent = `progress: ${Math.round(el.progress)}%`;
    updateEL.textContent = `update: ${update++}`;
    beganEl.textContent = `began: ${el.began}`;
    completedEl.textContent = `completed: ${el.completed}`;
  },
  began: (el) => {
    beganEl.textContent = `began: ${el.began}`;
  },
  complete: (el) => {
    completedEl.textContent = `completed: ${el.completed}`;
  },
});

var loopbegan = 0;
var loopcompleted = 0;
var changes = 0;
var changebegan = 0;
var changecompleted = 0;

var callpro2 = anime({
  targets: document.querySelector(".sq2"),
  translateX: 300,
  delay: 1000,
  direction: "alternate",
  easing: "easeInOutSine",
  loopBegin: (el) => {
    loopbeganEl.textContent = `loop began: ${loopbegan++}`;
  },
  loopComplete: (el) => {
    loopcompletedEl.textContent = `loop completed: ${loopcompleted++}`;
  },
  change: (el) => {
    changesEl.textContent = `changes: ${changes++}`;
  },
  changeBegin: (el) => {
    changebeganEl.textContent = `change began: ${changebegan++}`;
  },
  changeComplete: (el) => {
    changecompletedEl.textContent = `change completed: ${changecompleted++}`;
  },
});

var promiseppro = false;

var callpro3 = anime.timeline({
  targets: document.querySelector(".sq3"),
  delay: 300,
  duration: 300,
  easing: "easeInOutSine",
});

callpro3
  .add({
    
    translateX: 200,
  })
  .add({ scale: 2 })
  .add({ translateX: 0, scale: 1 });

callpro3.finished.then(
  () => (document.querySelector(".promise").textContent = "finished")
);

document.querySelector(".clickB1").onclick = callpro1.restart;
document.querySelector(".clickB2").onclick = callpro2.restart;
document.querySelector(".clickB3").onclick = callpro3.restart;
