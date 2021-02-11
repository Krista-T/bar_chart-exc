"use strict";
//make array with length of 40 with values of random nr.
let bars = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));

function drawBars(bars) {
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = bars[i] + "vw";
    document.querySelector("#chart").append(bar);
  }
}

function addNewBar() {
  const newBar = Math.floor(Math.random() * 32);
  const bar = document.createElement("div");
  bar.style.height = newBar + "vw";
  document.querySelector("#chart").append(bar);
  removeFirstBar();
}

function removeFirstBar() {
  let element = document.querySelector("#chart");
  element.removeChild(element.firstChild);
}

function addDelay(num) {
  setTimeout(function () {
    addNewBar();
  }, num * 1000);
}

let i = 0;
while (i < 100000) {
  addDelay(i);
  i++;
}

drawBars(bars);
