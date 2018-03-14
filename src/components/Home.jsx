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
         <img className="homepage-background" src={'https://s-media-cache-ak0.pinimg.com/originals/ea/7b/b0/ea7bb01ba5c99726519ae46e348a7125.png'}></img>
         <h1 className="homepage-title">Maptivity</h1>
         <LoginModal></LoginModal>
      </div>
    );
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
