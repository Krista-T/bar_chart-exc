"use strict";
//make array with length of 40
let bars = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));

let barChart = [];
let i = 0;

function createBars(bars) {
  for (i = 0; i < bars.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = bars[i] + "vw";
    document.querySelector("#chart").append(bar);
  }
  addBars(bars);
  loopBreak(num);
}

function addBars(bars) {
  console.log(bars);
  barChart.shift(bars);
  barChart.push(bars);
}

function loopBreak(num) {
  setTimeout(function () {
    //doStuff
    // barChart.push(bars[num]);
    console.log(barChart);
  }, num * 1000);
}
createBars(bars);
