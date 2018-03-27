import React from 'react';
import {Link} from 'react-router-dom';
//import { connect } from 'react-redux';

class MapNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

/* REDUX FUNCTIONALITY
function mapStateToProps(state) {
const { MapNav } = state.authentication;
  return {
   MapNav
   };
}

const connectedMapNav = connect(mapStateToProps)(MapNav);
*/
export default MapNav;
