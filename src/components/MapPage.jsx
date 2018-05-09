import React, {PropTypes} from 'react';
import moment from 'moment';

import Map from './Map.jsx';
import MapNav from './MapNav.jsx'

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      elapsedSeconds: 0,
      remainingSeconds: 0,
      isSimulationPlaying: false,
      isSimulationStarting: false,
      timeScale: 100000,
      countryCounters: [{total: 0}]
    };

  }

  compare(a,b) {
    if (a.count < b.count)
      return -1;
    if (a.count > b.count)
      return 1;
    return 0;
  }


  updateCounters = (country) => {

    /*let updatedCounts = Object.assign({}, this.state.countryCounters);  //copy

    if (!updatedCounts[country]) {
      updatedCounts[country] = {count: 0};
    }

    updatedCounts[country].count += 1;
    updatedCounts.total.count += 1;

    this.setState({
      countryCounters: updatedCounts
    });

    //figure out the order of the countries now
    for (var k in this.state.countryCounters) {
      // use hasOwnProperty to filter out keys from the Object.prototype
      if (this.state.countryCounters.hasOwnProperty(k)) {
          console.log('key is: ' + k + ', value is: ' + this.state.countryCounters[k]);
      }
    }*/
  }

  //utilizing class properties to bind functions correctly, babel stage-2
  updateData = (data) => {
    console.log('updating data');
    let totalTime = moment(data[data.length-1].timestamp).diff(moment(data[0].timestamp));
    let remainingSeconds = totalTime / this.state.timeScale / 1000;
    console.log(remainingSeconds);
    this.setState({
      data,
      isSimulationPlaying: true,
      isSimulationStarting: true,
      remainingSeconds
    },() => this.setState({isSimulationStarting: false}));
  }

  updateTimeline = (elapsedSeconds, remainingSeconds) => {
    this.setState({
      elapsedSeconds,
      remainingSeconds
    });
  }

  changeTimeScale = (timeScale) => {
    if(timeScale >= 1 && timeScale <= 1000000) {
      //this.updateTimeline()
      let data = this.state.data;
      let totalTime = moment(data[data.length-1].timestamp).diff(moment(data[0].timestamp));
      let remainingSeconds = totalTime / timeScale / 1000;
      this.setState({
        timeScale,
        remainingSeconds
      });
    }
  }

  togglePlayback = () => {
    console.log('toggling playback from MapPage');
    this.setState({
      isSimulationPlaying: !this.state.isSimulationPlaying
    })
  }

  render() {
    return (
        <div>
            <MapNav
              updateData={this.updateData}
              togglePlayback={this.togglePlayback}
              changeTimeScale={this.changeTimeScale}
              {...this.state}/>
            <Map
              togglePlayback={this.togglePlayback}
              updateCounters={this.updateCounters}
              {...this.state}/>
      </div>
    );
  }
}
