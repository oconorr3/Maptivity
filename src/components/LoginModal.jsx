import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal, Button, FormGroup, FormControl} from 'react-bootstrap';

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
    this.setState({ submitted: true });
    const { company, username, password } = this.state;
    if (company && username && password) {

        console.log("Login Form Submitted with fields:\ncompany: " + company + "\nusername: " + username + "\npassword: " + password);
    }
  }

  render() {

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="login-modal-container">
         <Modal.Dialog className="login-modal">
           <Modal.Body className="login-modal-body">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl type="text" placeholder="Company" name="company"  onChange={this.handleChange}/>
                <FormControl type="text" placeholder="Username" name="username"  onChange={this.handleChange}/>
                <FormControl type="password" placeholder="Password" name="password"  onChange={this.handleChange}/>
                <div className="remember-forgot">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn btn-default btn-lg btn-block" link="/Map" onClick={this.handleSubmit}>
              SIGN IN
            </Button>
            <Button onClick={this.props.onClose}>
              Close
            </Button>
          </Modal.Footer>
         </Modal.Dialog>
       </div>
    );
  }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
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
