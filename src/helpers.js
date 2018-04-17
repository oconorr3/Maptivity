import moment from 'moment';

export default class TimedPlayback {
  constructor(data, callback, timeScaleFactor) {
    this.data = JSON.parse(JSON.stringify(data)); //make copy of data object array
    this.callback = callback; //this will draw bubbles when it's time
    this.timeScaleFactor = timeScaleFactor;
    this.isPlaying = false;
    this.resume();
  }

  myLoop() {
    let data = this.data;
    let waitTime = 1;
    if (data[1]) {
      let now  = data[0].timestamp;
      let next = data[1].timestamp;
      let millisecondsToNext = moment(next).diff(moment(now));

      waitTime = millisecondsToNext / this.timeScaleFactor;
      console.log(waitTime);
      if (waitTime < -1) {
        console.log(`whoops, negative time to next: ${waitTime}`);
      }
      if(waitTime <= 1) {
        waitTime = 1;
      }
    }
    else {
      console.log('data mapping complete');
    }
    this.timerId = window.setTimeout(() => {
      this.callback(data.shift());
      if(data.length) {
        this.myLoop();
      }
    }, waitTime);
  }

  pause() {
    this.isPlaying = false;
    window.clearTimeout(this.timerId);
    this.remaining -= new Date() - this.start;
  };

  resume() {
    this.isPlaying = true;
    this.start = new Date();
    if(this.timerId)
      window.clearTimeout(this.timerId);
    this.myLoop();
  };
}
