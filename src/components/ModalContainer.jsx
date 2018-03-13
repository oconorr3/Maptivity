import React from 'react';
import {Link} from 'react-router-dom';
import LoginModal from './LoginModal.jsx'

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal-container">
        <LoginModal {...this.state}/>
      </div>
  );
  }
}

/* REDUX FUNCTIONALITY
function mapStateToProps(state) {
    const { ModalContainer } = state.authentication;
    return {
        ModalContainer
    };
}

const connectedModalContainer = connect(mapStateToProps)(ModalContainer);
*/
export default ModalContainer;
