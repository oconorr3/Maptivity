import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal, Button, Form, FormGroup, FormControl} from 'react-bootstrap';

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
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl type="text" placeholder="Company" name="company"  onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <FormControl type="text" placeholder="Username" name="username"  onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <FormControl type="password" placeholder="Password" name="password"  onChange={this.handleChange}/>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" bsSize="large" link="/Map" onClick={this.handleSubmit}>
            SIGN IN
          </Button>
          <Button onClick={this.props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginModal;
