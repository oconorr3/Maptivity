import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from '../actions/login.alert.actions.js';


import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };

  }
  render() {
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a>Maptivity</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">
                    About
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Our Mission
                  </NavItem>
                  <NavDropdown eventKey={3} title="Products & Features" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Data Analytics</MenuItem>
                    <MenuItem eventKey={3.2}>Data Vizualization</MenuItem>
                    <MenuItem eventKey={3.3}>Data Predictions</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>link to somewhere</MenuItem>
                  </NavDropdown>
                </Nav>

                <Nav pullRight>
                  <LinkContainer to="/login">
                    <NavItem eventKey={1} href="#">
                      Login
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <NavItem eventKey={2} href="#">
                      Register
                    </NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
          </Navbar>

      </div>
        <h2>Our Mission: Providing Your Organization With The Information You Need To Be Successfull</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { home } = state.authentication;
    return {
        home
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export default Home;
