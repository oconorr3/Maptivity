import React, {PropTypes} from 'react';
import Datamap from './Datamap.jsx';
import MapNav from './MapNav.jsx'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scope: 'world',
      selectedRegion: 'ALL'
    };

  }

  update(region) {
    var _this = this;

    this.setState(Object.assign({}, {
      selectedRegion: region
    }, window.example));
  }

  render() {
    return (<div className="App">
      <div className="App-options">
        <MapNav/>
      </div>
      <div className="App-map">
        <Datamap {...this.state}/>
      </div>
    </div>);
  }
}
