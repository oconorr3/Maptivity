import React from 'react';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    };

  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }


  handleSignIn(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {username, password} = this.state;
    const {dispatch} = this.props;
    if (username && password) {
      //dispatch(userActions.login(username, password));
      console.log("Email: " + this.state.email);
      console.log("Password: " + this.state.password);

      //Not doing any real authentication right now
    }
  }

  render() {
    return (<div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Maptivity</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <form className="navbar-form navbar-right" action="this.handle">
              <div className="form-group">
                <input type="text" placeholder="Email" className="form-control" onChange={this.handleEmailChange}></input>{' '}
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="form-control" onChange={this.handlePasswordChange}></input>{' '}
              </div>
              <button type="submit" className="btn btn-success">Sign In</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="jumbotron">
        <div className="container">
          <h1>Maptivity</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Services</h2>
            <p>Some text that explains the services we have and how we raise rabble.</p>
            <p>
              <a className="btn btn-default" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Products</h2>
            <p>Some text that explains what kind of products we offer.</p>
            <p>
              <a className="btn btn-default" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>About Us</h2>
            <p>Some text that explains who we are are and how much we like to raise some rabble.</p>
            <p>
              <a className="btn btn-default" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
        </div>

        <hr></hr>

        <footer>
          <p>&copy; 2016 The Rabble Rousers, Inc.</p>
        </footer>
      </div>
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
