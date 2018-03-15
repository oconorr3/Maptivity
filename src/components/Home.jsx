import React from 'react';
import {Link} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import LoginModal from './LoginModal.jsx'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }


//<LoginModal classNameNameNameNameName="homepage-login-modal"></LoginModal>
  render() {

    return (
      <div className="homepage-body" id="page-top">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Maptivity</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/Map">Map</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="masthead">
            <div className="intro-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h1 className="brand-heading">MAPTIVITY</h1>
                    <p className="intro-text">A unique and low cost solution to your data visualization and analytic needs.</p>
                    <a href="#about" className="btn btn-circle js-scroll-trigger">
                      <i className="fa fa-angle-double-down animated"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="about" className="content-section text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>About Grayscale</h2>
                  <p>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                    <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                  <p>This theme features stock photos by
                    <a href="http://gratisography.com/">Gratisography</a>
                    along with a custom Google Maps skin courtesy of
                    <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
                  <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and LESS files for easy customization!</p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="features-section content-section text-center">
            <div className="container">
              <div className="col-lg-8 mx-auto">
                <h2>Maptivity Features</h2>
                <p>Maptivity offers a variety of features to service your needs.</p>
                <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
              </div>
            </div>
          </section>

          <section id="contact" className="content-section text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>Contact Us</h2>
                  <p>Feel free to contact us about any questions pertaining to our service
                    <a href="https://github.com/oconorr3/Maptivity"> some contact info links(#s, emails idk)</a>
                  </p>
                  <ul className="list-inline banner-social-buttons">
                    <li className="list-inline-item">
                      <a href="https://github.com/oconorr3/Maptivity" className="btn btn-default btn-lg">
                        <i className="fa fa-twitter fa-fw"></i>
                        <span className="network-name">Twitter</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/oconorr3/Maptivity" className="btn btn-default btn-lg">
                        <i className="fa fa-github fa-fw"></i>
                        <span className="network-name">Github</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://plus.google.com/+Startbootstrap/posts" className="btn btn-default btn-lg">
                        <i className="fa fa-google-plus fa-fw"></i>
                        <span className="network-name">Google+</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className="container text-center">
              <p>Copyright &copy; Maptivity 2018</p>
            </div>
          </footer>
        </div>

    );
  }
}

export default Home;
