import React, {PropTypes} from 'react';
import Map from './Map.jsx';
import MapNav from './MapNav.jsx'

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isSimulationPlaying: false,
      isSimulationStarting: false,
      timeScale: 100000
    };

  }

  //utilizing class properties to bind functions correctly, babel stage-2
  updateData = (data) => {
    console.log('updating data');
    this.setState({
      data,
      isSimulationPlaying: true,
      isSimulationStarting: true
    },() => this.setState({isSimulationStarting: false}));
  }


  changeTimeScale = (timeScale) => {
    if(timeScale >= 1 && timeScale <= 1000000)
      this.setState({timeScale});
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
              isSimulationPlaying={this.state.isSimulationPlaying}
              timeScale={this.state.timeScale}
              changeTimeScale={this.changeTimeScale}/>
            <Map togglePlayback={this.togglePlayback} {...this.state}/>
      </div>
    );
  }
}
