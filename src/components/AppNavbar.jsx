import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AppNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };

    }


    render() {
      return (
        <div className="container">
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Project name</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Visualization<span className="sr-only">(current)</span></a></li>
                  <li><a href="#about">Analytics</a></li>
                  <li><a href="#contact">Predictions</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li className="dropdown-header">Nav header</li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/">My Account</a></li>
                  <li><a href="/">Supprt</a></li>
                  <li><a href="/">Log Out</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
      const { AppNavBar } = state.authentication;
      return {
          AppNavBar
      };
  }

  const connectedAppNavBar = connect(mapStateToProps)(AppNavBar);
  export default AppNavBar;
