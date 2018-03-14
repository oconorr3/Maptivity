import React from 'react';
import {Link} from 'react-router-dom';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name + " changed to => " + value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting yo");
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password && password) {
        console.log("Sign In action processed with valid username & password fields");
    }
  }

  render() {
    return (
      <div className="login-wrap">
          <form className="login" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Company" name="company"  onChange={this.handleChange}/>
            <input type="text" placeholder="Username" name="username"  onChange={this.handleChange}/>
            <input type="password" placeholder="Password" name="password"  onChange={this.handleChange}/>
            <Link to="/Map">
              <button type="submit" value="/Map" className="btn btn-success btn-sm" onSubmit={this.handleSubmit}>
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
