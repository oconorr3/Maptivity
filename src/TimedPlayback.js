import moment from 'moment';

export default class TimedPlayback {
  constructor(data, timeScale, callback) {
    this.data = JSON.parse(JSON.stringify(data)); //make copy of data object array
    this.callback = callback; //this will draw bubbles when it's time
    this.timeScale = timeScale;
    this.isPlaying = false;
  }

  /* loop function to call timer and iterate through data points*/
  myLoop() {
    let data = this.data;
    let waitTime = 1;
    if (data[1]) { //if there is more than one object in the array, calculate wait time
      let now  = data[0].timestamp;
      let next = data[1].timestamp;
      let last = data[data.length - 1].timestamp;
      this.remainingSeconds = moment(last).diff(moment(now)) / 1000 / this.timeScale;
      let millisecondsToNext = moment(next).diff(moment(now));

      waitTime = millisecondsToNext / this.timeScale;
      if (waitTime < -1) //data is out of order
        console.log(`whoops, negative time to next: ${waitTime}`);
      if(waitTime < 1) //less than 1 millisecond wait time should be set to 1ms
        waitTime = 1;
      if(waitTime > 3000) //greater than 3 seconds is logged
        console.log(`${((waitTime-this.elapsed)/1000).toFixed(2)} seconds to next ping, ${this.remainingSeconds} seconds remaining total`);
      this.timerId = window.setTimeout(() => {
        this.elapsed = 0;
        this.callback(data.shift()); //shift will modify array to remove and return first element
        if(data.length) { //if there is elements left, continue looping
          this.myLoop();
        }
      }, waitTime - this.elapsed);
    }
    else {
      this.callback(data.shift());  //notify map that we finished processing the data
      console.log('data mapping complete');
      this.isPlaying = false;
      window.clearTimeout(this.timerId);
    }

  }

  pause() {
    console.log('pausing timer');
    this.isPlaying = false;
    this.elapsed += moment().diff(this.start);
    console.log(this.elapsed);
    window.clearTimeout(this.timerId);
  };

  resume() {
    console.log('resuming timer');
    this.isPlaying = true;
    this.start = moment();
    if(this.timerId)
      window.clearTimeout(this.timerId);
    this.myLoop();
  };

  updateTimeScale(timeScale) {
    this.timeScale = timeScale;
    this.elapsed = 0;
    if(this.timerId && this.isPlaying) {
      window.clearTimeout(this.timerId);
      this.myLoop();
    }
    console.log(`Time Scale Changed, ${this.remainingSeconds} remaining`);
  }
}
