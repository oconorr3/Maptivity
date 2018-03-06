import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'

const Home = () => (

  <div>
    <div>
      <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Maptivity</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Some Other Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown If Needed" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Login
              </NavItem>
              <NavItem eventKey={2} href="#">
                Register
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

  </div>
    <h2>Our Mission: Providing Your Organization With The Information You Need To Be Successfull</h2>
  </div>
);

export default Home;
