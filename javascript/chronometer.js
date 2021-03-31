class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime++;
      // callback();
    }, 1000);
  }
  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    //if (this.currentTime>0)
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}
