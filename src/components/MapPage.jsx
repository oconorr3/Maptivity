import React, {PropTypes} from 'react';
import moment from 'moment';

import Map from './Map.jsx';
import MapNav from './MapNav.jsx'

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      simulationDate: null,
      isSimulationPlaying: false,
      isSimulationStarting: false,
      timeScale: 10000,
      countryCounters: [
        {
          name: 'Total',
          count: 0,
          rank: 0
        }
      ]
    };
  }

  processDataPoint = (datum) => {
    this.updateCounters(datum.country);
    this.setState({simulationDate: moment(datum.timestamp).utcOffset(-4).format('ddd, MMM Do YYYY, h:mm:ss a')});
  }

  updateCounters = (countryName) => {
    let newCountryCounters = this.state.countryCounters.slice();
    newCountryCounters[0].count++; //always add to the total counter
    let countryIndex = this.state.countryCounters.findIndex((currentCountryObject) => currentCountryObject.name == countryName);
    if(countryIndex == -1) { //if country isn't in array, add it
       newCountryCounters.push({name: countryName, count: 1, rank: newCountryCounters.length});
    }
    else { //otherwise add to count and resort array
      newCountryCounters[countryIndex].count++;
      newCountryCounters.sort((a, b) => {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count ){
          //console.log(`${a.name} is greater than ${b.name}`);
          //console.log(`${a.rank} is less than ${b.rank}`);
          return -1;
        }
        if (a.rank > b.rank)
            return 1;
        return -1;
      });
    }
    this.setState({countryCounters: newCountryCounters});
  }

  //utilizing class properties to bind functions correctly, babel stage-2
  updateData = (data) => {
    console.log('updating data');
    this.setState({
      data,
      isSimulationPlaying: true,
      isSimulationStarting: true,
      countryCounters: [
        {
          name: 'Total',
          count: 0
        }
      ]
    },() => this.setState({isSimulationStarting: false})); //this state variable is needed to allow for automatic starting and manual playback control
  }

  changeTimeScale = (timeScale) => {
    if(timeScale >= 1 && timeScale <= 100000) {
      this.setState({
        timeScale
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
              processDataPoint={this.processDataPoint}
              {...this.state}/>
      </div>
    );
  }
}
