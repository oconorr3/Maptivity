import moment from 'moment';

export default class TimedPlayback {
  constructor(data, callback, timeScaleFactor) {
    this.data = JSON.parse(JSON.stringify(data)); //make copy of data object array
    this.callback = callback; //this will draw bubbles when it's time
    this.timeScaleFactor = timeScaleFactor;
    this.isPlaying = false;
    this.resume();
  }

  /* loop function to call timer and iterate through data points*/
  myLoop() {
    let data = this.data;
    let waitTime = 1;
    if (data[1]) { //if there is more than one object in the array, calculate wait time
      let now  = data[0].timestamp;
      let next = data[1].timestamp;
      let millisecondsToNext = moment(next).diff(moment(now));

      waitTime = millisecondsToNext / this.timeScaleFactor;
      if (waitTime < -1) { //data is out of order
        console.log(`whoops, negative time to next: ${waitTime}`);
      }
      if(waitTime < 1) { //less than 1 millisecond wait time should be set to 1ms
        waitTime = 1;
      }
      if(waitTime > 5000) { //greater than 5 seconds is logged
        console.log(waitTime)
      }
    }
    else {
      console.log('data mapping complete');
      this.isPlaying = false;
      window.clearTimeout(this.timerId);
    }
    this.timerId = window.setTimeout(() => {
      this.callback(data.shift()); //shift will modify array to remove and return first element
      if(data.length) { //if there is elements left, continue looping
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
