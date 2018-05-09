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
      countryCounters: [
        {
          name: 'Total',
          count: 0
        }
      ]
    };
  }

  updateCounters = (countryName) => {
    let newCountryCounters = this.state.countryCounters.slice();
    newCountryCounters[0].count++; //always add to the total counter
    let countryIndex = this.state.countryCounters.findIndex((currentCountryObject) => currentCountryObject.name == countryName);
    if(countryIndex == -1) { //if country isn't in array, add it
       newCountryCounters.push({name: countryName, count: 1});
    }
    else { //otherwise add to count and resort array
      newCountryCounters[countryIndex].count++;
      newCountryCounters.sort((a, b) => {
        if (a.count < b.count)
          return 1;
        if (a.count > b.count)
          return -1;
        return 0;
      });
    }
    this.setState({countryCounters: newCountryCounters});
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
