const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigsMin = chronometer.twoDigitsNumber(minutes);
  minUni.innerHTML = twoDigsMin[1];
  minDec.innerHTML = twoDigsMin[0];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let twoDigs = chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = twoDigs[1];
  secDec.innerHTML = twoDigs[0];
  //secUni.innerTExt=chronometer.printTime%10
  //secUni.innerText = chronometer.currentTime;
  //if(secUni.innerText=="9"
  //if (secUni.innerText === "9") {
  //secDec.innerText = chronometer.currentTime % 10;
  //secUni = "0";
  // }

  //if (secDec.innerText === "5" && secUni.innerText === "9") {
  // secUni = "0";
  //  sedDec = "0" && printMinutes();
  //}
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  //change the class
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  //change the class
  btnLeft.className = "btn start";
}

function setResetBtn() {
  // btnRight
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else if (btnLeft.innerText === "STOP") {
    chronometer.stopClick();
    setStartBtn();
  }

  //change status -> taggle their classes
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "RESET") {
    split;
    setSplitBtn();
  } else if (btnRight.innerText === "SPLIT") {
    setResetBtn();
    splitClick();
    //add elements in the dom:
    let li = document.createElement("li");
    li.innerText = chronometer.splitClick();
    splits.appendChild(li);
  }
});
