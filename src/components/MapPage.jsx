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
      timeScale: 100000
    };

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
              {...this.state}/>
      </div>
    );
  }
}
