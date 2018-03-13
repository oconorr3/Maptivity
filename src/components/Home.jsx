import React from 'react';
import {Link} from 'react-router-dom';

import ModalContainer from './ModalContainer.jsx'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (<div>
      <div className="title">
       <h1>Maptivity</h1>
     </div>
      <ModalContainer>
      </ModalContainer>
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
