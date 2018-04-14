import React from 'react';
import {Link} from 'react-router-dom';
import { Clearfix, Grid, Row, Col, Image, Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import LoginModal from './LoginModal.jsx'
import ReactBootstrapSlider from 'react-bootstrap-slider';


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false
    };
  }

  render() {
    let loginModalClose = () => this.setState({ showLoginModal: false });

    return (
        <div>
          <Navbar id="mainNav" fixedTop >
              <Navbar.Header>
                 <Navbar.Brand>
                   <a href="#page-top">Maptivity</a>
                 </Navbar.Brand>
               </Navbar.Header>
                <Nav bsStyle="pills" pullRight>
                    <NavItem id="nav-item" href="/Map">Map</NavItem>
                    <NavItem id="nav-item" href="#about">About</NavItem >
                    <NavItem id="nav-item" href="#services">Services</NavItem >
                    <NavItem id="nav-item" href="#contact">Pricing</NavItem >
                    <NavItem id="nav-item" href="#contact">Contact</NavItem >
                    <NavItem onClick={() => this.setState({ showLoginModal: true })}>Sign In</NavItem>
                  </Nav>
                  <LoginModal show={this.state.showLoginModal} onHide={loginModalClose}/>
          </Navbar>

          <header className="masthead text-center text-white d-flex" id="page-top">
            <Grid>
              <Row>
                <Col lg={12} className="mx-auto">
                  <h1 className="text-primary">
                    <strong>A LOW COST SOLUTION TO YOUR DATA VISUALIZATION NEEDS</strong>
                  </h1>
                  <hr></hr>
                </Col>
                <Col lg={12} className="mx-auto">
                  <p className="text-faded mb-5">Maptivity can help you make better decisions when it comes to your business. </p>
                  <Button className="btn-homepage" bsStyle="primary" bsSize="large" href="#about">Find Out More</Button>
                </Col>
              </Row>
            </Grid>
          </header>

          <section className="bg-primary" id="about">
            <Grid>
              <Row>
                <Col lg={12} className="text-center mx-auto">
                  <h2 className="section-heading text-white">About Us</h2>
                  <hr className="light my-4"></hr>
                  <p className="text-faded mb-4">Maptivity has everything you need to get your new or existing business a competitive edge in no time! Through modern data analytics and visualization Maptivity empowers your business to make better decisions to grow and thrive.</p>
                  <Button className="btn-homepage" bsStyle="default" href="#services">Get Started!</Button>
                </Col>
              </Row>
            </Grid>
          </section>

          <section className="bg-dark" id="services">
            <Grid>
              <Row>
                <Col lg={12} className="text-center">
                  <h2 className="section-heading text-white">At Your Service</h2>
                  <hr className="my-4"></hr>
                </Col>
              </Row>
            </Grid>
            <Grid>
              <Row>
                <Col lg={6} md={6} className="text-center">
                    <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Realtime Data Visualization</h3>
                    <p className="text-muted mb-0">View the use of your app or service in realtime via our Geo-Spatial Data Visualization</p>
                    </i>
                </Col>
                <Col lg={6} md={6} className="text-center">
                    <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Ready to Ship</h3>
                    <p className="text-muted mb-0">You can use this rabble as is, or you can make changes!</p>
                    </i>
                </Col>
                <Clearfix></Clearfix>
                <Col lg={6} md={6} className="text-center">
                    <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Up to Date</h3>
                    <p className="text-muted mb-0">We regularly rouse new rabble to keep you up to date with the best rabble.</p>
                    </i>
                </Col>
                <Col lg={6} md={6} className="text-center">
                    <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Made with Love</h3>
                    <p className="text-muted mb-0">You have to love the rabble you raise these Days! #RabbleRousers</p>
                    </i>
                </Col>
              </Row>
            </Grid>
          </section>

          <section className="bg-primary text-white">
            <Grid className="text-center">
              <h2 className="mb-4">Pricing</h2>
              <Button className="btn-homepage" bsStyle="default" href="https://github.com/oconorr3/Maptivity">Link to repo for now</Button>
            </Grid>
          </section>

          <section id="contact">
            <Grid>
              <Row>
                <Col lg={12} className="mx-auto text-center">
                  <h2 className="section-heading">Contact</h2>
                  <hr className="my-4"></hr>
                  <p className="mb-5">For questions or support please give us a call or send us an email and we will get back to you as soon as possible!</p>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="ml-auto text-center">
                  <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                  <p>XXX-XXX-XXXX</p>
                </Col>
                <Col lg={12} className="mr-auto text-center">
                  <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                  <p>
                    <Button className="btn-homepage" bsStyle="default" href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</Button>
                  </p>
                </Col>
              </Row>
            </Grid>
          </section>
        </div>
    );
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
