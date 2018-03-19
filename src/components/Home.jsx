import React from 'react';
import {Link} from 'react-router-dom';
import { Image, Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import LoginModal from './LoginModal.jsx'


class Home extends React.Component {
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
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h1 className="text-uppercase">
                    <strong>A LOW COST SOLUTION TO YOUR DATA VISUALIZATION NEEDS</strong>
                  </h1>
                  <hr></hr>
                </div>
                <div className="col-lg-8 mx-auto">
                  <p className="text-faded mb-5">Maptivity can help you make better decisions when it comes to your business. </p>
                  <Button className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</Button>
                </div>
              </div>
            </div>
          </header>

          <section className="bg-primary" id="about">
            <div className="container">
              <div className="row" >
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="section-heading text-white">About Us</h2>
                  <hr className="light my-4"></hr>
                  <p className="text-faded mb-4">Maptivity has everything you need to get your new or existing business a competitive edge in no time! Through modern data analytics and visualization Maptivity empowers your business to make better decisions to grow and thrive.</p>
                  <Button className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-dark" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">At Your Service</h2>
                  <hr className="my-4"></hr>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Realtime Data Visualization</h3>
                    <p className="text-muted mb-0">View the use of your app or service in realtime via our Geo-Spatial Data Visualization</p>
                    </i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Ready to Ship</h3>
                    <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                    </i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Up to Date</h3>
                    <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
                    </i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box mt-5 mx-auto">
                    <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons">
                    <h3 className="mb-3">Made with Love</h3>
                    <p className="text-muted mb-0">You have to make your websites with love these days!</p>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="bg-primary text-white">
            <div className="container text-center">
              <h2 className="mb-4">Pricing</h2>
              <Button className="btn btn-light btn-xl sr-button" href="https://github.com/oconorr3/Maptivity">Link to repo for now</Button>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="section-heading">Contact</h2>
                  <hr className="my-4"></hr>
                  <p className="mb-5">For questions or support please give us a call or send us an email and we will get back to you as soon as possible!</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 ml-auto text-center">
                  <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                  <p>XXX-XXX-XXXX</p>
                </div>
                <div className="col-lg-4 mr-auto text-center">
                  <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                  <p>
                    <Button href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</Button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default Home;
