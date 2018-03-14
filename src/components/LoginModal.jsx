import React from 'react';
import {Link} from 'react-router-dom';

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
      <div className="login-wrap">
          <form className="login">
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/Map">
              <button type="submit" value="/Map" className="btn btn-success btn-sm">
                SIGN IN
              </button>
            </Link>
            <div className="remember-forgot">
                <div className="row">
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
          </form>
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
