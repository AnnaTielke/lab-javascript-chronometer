class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }
  getMinutes() {
    let minutes1 = this.currentTime / 60;
    let minutes = Math.floor(minutes1);
    return minutes;
  }
  getSeconds() {
    //if (this.currentTime>0)
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(time) {
    if (time >= 10) {
      let newTime = `${time}`;
      return newTime;
    } else if (time < 10 && time > 0) {
      let newTime = `0${time}`;
      return newTime;
    } else if (time == 0) {
      return "00";
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
