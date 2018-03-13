import React from 'react';
import {Link} from 'react-router-dom';
import InputField from './InputField.jsx'

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: true
      }
      // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isVisible: false
    }, function() {
      console.log(this.state.isVisible)
    });
    return false;
  }

  handleRemount(e) {
    this.setState({
      isVisible: true
    }, function() {
      console.log(this.state.isVisible)
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className='LoginModal'>
          <form onSubmit= { this.handleSubmit }>
            <InputField type='text' name='username' placeholder='username' />
            <InputField type='password' name='password' placeholder='password' />
            <button> Sign In</button>
          </form>
          <div className='social-signin'>
            <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
            <button className="tw" onClick={ this.props.onClick }><i className="fa fa-twitter" aria-hidden="true"></i></button>
          </div>
            <a href='#'>Lost your password ?</a>
       </div>
          );
  }
}

/* REDUX FUNCTIONALITY
function mapStateToProps(state) {
    const { LoginModal } = state.authentication;
    return {
        LoginModal
    };
}

const connectedLoginModal = connect(mapStateToProps)(LoginModal);
*/
export default LoginModal;
