import React, {PropTypes} from 'react';
import Map from './Map.jsx';
import MapNav from './MapNav.jsx'

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      simulationPlaying: false
    };

  }

  //utilizing class properties to bind functions correctly, babel stage-2
  updateData = (data) => {
    this.setState({
      data,
      simulationPlaying: true
    });
  }

  togglePlayback = () => {
    this.setState({
      simulationPlaying: !this.state.simulationPlaying
    })
  }

  update(region) {
    var _this = this;

    this.setState(Object.assign({}, {
      selectedRegion: region
    }, window.example));
  }

  render() {
    return (
        <div>
            <MapNav updateData={this.updateData} togglePlayback={this.togglePlayback}></MapNav>
            <Map {...this.state}></Map>
      </div>
    );
  }
}
