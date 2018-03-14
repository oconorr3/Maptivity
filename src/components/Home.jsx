import React from 'react';
import {Link} from 'react-router-dom';

import LoginModal from './LoginModal.jsx'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
    <div>
       <h1 className="homepage-title">Maptivity</h1>
      <LoginModal></LoginModal>
    </div>);
  }
}

/* REDUX FUNCTIONALITY
function mapStateToProps(state) {
    const { Home } = state.authentication;
    return {
        Home
    };
}

const connectedHome = connect(mapStateToProps)(Home);
*/
export default Home;
