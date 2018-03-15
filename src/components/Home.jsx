import React from 'react';
import {Link} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import LoginModal from './LoginModal.jsx'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }


//<LoginModal classNameNameNameName="homepage-login-modal"></LoginModal>
  render() {

    return (
      <div className="wrapper">
        <section className="hero">
          <header>
            <div className="container">
              <nav className="navbar navbar-light navbar-toggleable-sm">
                <a href="#" className="navbar-brand mb-0">CoWork</a>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#headerNav" aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div id="headerNav" className="collapse navbar-collapse justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#sec-about">About</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#sec-features">Features</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#sec-pricing">Pricing</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#sec-testimonials">Testimonials</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#sec-contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>

          <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-md-10 col-lg-6">
                  <h1 className="display-5">The Coolest Co-Working Space in Prague</h1>

                  <p className="lead">Where you choose to work has impact on your productivity and creativity. It also says a lot about your business. We are the right office space.</p>

                  <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#sec-pricing" role="button">Reserve Your Spot</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-about" className="sec-about pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10 col-lg-8">
                <h1 className="h4">About us</h1>
                <p className="mt-4 mb-4">Co-working spaces are brilliant for smaller companies of up to 4 people who want a regular workspace. Cost effective, flexible and full of a vibrant energy that comes from hundreds of like-minded people going it alone.</p>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-4">
                <h4>350</h4>

                <hr />

                <h5>
                  members</h5>
              </div>

              <div className="col-sm-4">
                <h4>60</h4>

                <hr />

                <h5>co-working spaces </h5>
              </div>

              <div className="col-sm-4">
                <h4>3</h4>

                <hr />

                <h5>members bars</h5>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-features" className="sec-features pt-5 pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="h4">Lockers</h3>

                <hr />

                <p>Lockers come in all different shapes and sizes and can be hired in any building, even if it’s not your home building.</p>
              </div>

              <div className="col-md-6 text-center">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g fill="#01305d"><path d="M30.87 45.83c7.49-3.55 15.87-4.88 24.11-4.7 112.02.03 224.05 0 336.07.02 11.17-.02 22.28 3.78 31.17 10.52 12.33 9.17 20.2 23.96 21.06 39.28 0 68.81-.05 137.61.02 206.42-4.24 0-8.48-.03-12.71-.02-.02-67.78-.01-135.57-.01-203.36.14-11.38-4.92-22.67-13.51-30.13-7.1-6.38-16.57-10.05-26.12-10.06-112.64-.01-225.28.01-337.92-.01-11.06-.14-22.05 4.54-29.57 12.67-6.98 7.34-10.84 17.41-10.78 27.52.01 98.02.01 196.03 0 294.05-.14 5.62.38 11.34 2.43 16.63 5.48 15.53 21.38 26.59 37.88 26.18 107.17.01 214.33-.01 321.5.01-.19 4.22-.08 8.46-.08 12.7l-3.95-.03c-.04 7.16.08 14.33-.06 21.49.2 3.42-3.03 6.19-6.35 5.85-18.04.03-36.09.04-54.13-.01-3.2.23-6.16-2.59-6-5.81-.23-7.17.03-14.34-.05-21.51l-164.46.01c-.15 7.35.22 14.71-.1 22.06-.13 3.11-3.14 5.47-6.17 5.26-17.37.07-34.75-.04-52.12.04-2.16-.05-4.64.11-6.3-1.55-1.92-1.49-1.96-4.08-1.93-6.29.08-6.51-.02-13.02.01-19.53-8.02-.12-16.04.23-24.04-.15-16.18-1.04-31.55-10.18-40.29-23.82-4.98-7.48-7.69-16.29-8.47-25.21v-303.65c1.04-19.15 13.35-37.08 30.87-44.87m53.65 397.7c-.04 5.2.03 10.4.01 15.61 14.38.01 28.76 0 43.14 0-.07-5.21.01-10.41-.02-15.62-14.38.03-28.75.01-43.13.01m231.07.03c-.04 5.19-.04 10.38-.02 15.57 14.38.01 28.77.02 43.16 0 .01-5.19.03-10.38-.01-15.57-14.38-.04-28.75-.05-43.13 0zM63.91 83.94c-.1-2.66 2.61-4.33 5.05-4 106-.04 212.01-.02 318.01-.01 15.27-.35 29.1 13.09 29.21 28.35.09 63.03.02 126.05.04 189.08-2.82-.01-5.64-.01-8.46-.01-.01-62.75.04-125.5-.02-188.25.22-11.04-9.69-20.94-20.74-20.7-104.9-.01-209.81-.03-314.71.01-.08 15.51.02 31.02-.03 46.54 6.58.18 13.18-.37 19.75.18 2.95.35 2.77 5.35-.21 5.52-6.5.36-13.03.02-19.54.13.02 67.7 0 135.39.01 203.09 6.55.09 13.13-.21 19.67.17 3.05.28 2.94 5.22-.01 5.56-6.54.38-13.12-.02-19.67.15 0 15.51.03 31.02-.01 46.52 98.69.02 197.38.01 296.07.01-.12 2.96-.06 6.06 1.71 8.59-25-.35-50.03-.06-75.05-.14-73.64 0-147.28-.04-220.93.01-2.69-.14-5.56.41-8.12-.59-2.27-1.17-2.13-3.97-2.15-6.14.13-16.09-.01-32.18.06-48.27-5.5-.17-11.02.3-16.5-.17-2.97-.57-2.63-5.5.41-5.58 5.35-.33 10.73-.05 16.09-.1-.03-67.7 0-135.4-.01-203.1-5.51-.15-11.04.28-16.53-.19-2.59-.5-2.8-4.87-.18-5.43 5.54-.56 11.13-.04 16.69-.25.11-16.99-.12-33.99.1-50.98z"/></g><g fill="#1096fc"><path d="M226.12 119.02c3.84-6.56 12.59-9.57 19.66-6.74 6.05 2.18 10.41 8.28 10.5 14.72.09 4.51-.01 9.03.03 13.55 15.86 2.62 31.09 8.89 44.12 18.32 4.83-4.3 8.59-10.12 14.62-12.85 7.21-3.07 16.33-.03 20.17 6.82 3.51 5.73 2.91 13.62-1.51 18.7-3.24 3.62-6.86 6.87-10.2 10.39 9.39 13.03 15.69 28.24 18.27 44.09 6.99.53 14.63-1.45 21.05 2.12 6.54 3.55 9.9 11.88 7.6 18.97-1.85 6.26-7.82 11.07-14.35 11.44-4.77.2-9.55.01-14.32.08-2.53 15.87-8.92 31.04-18.27 44.1 5.17 5.91 13.25 10.61 13.94 19.2 1.24 9.7-7.78 18.94-17.52 17.81-8.74-.49-13.54-8.7-19.48-13.94-13.02 9.38-28.2 15.73-44.06 18.26-.56 8 1.96 17.51-4.23 23.95-6.19 7.36-18.8 7.11-24.68-.5-5.63-6.51-3.22-15.6-3.72-23.41-15.88-2.58-31.09-8.91-44.13-18.3-5.96 5.23-10.77 13.49-19.52 13.94-9.66 1.08-18.64-8.01-17.47-17.65.55-8.68 8.72-13.41 13.93-19.33-9.37-13.06-15.74-28.24-18.29-44.12-7.77-.53-16.79 1.9-23.3-3.66-7.93-5.99-7.98-19.18-.09-25.22 6.5-5.67 15.61-3.17 23.42-3.74 2.54-15.86 8.85-31.06 18.26-44.08-4.66-5.44-11.69-9.51-13.53-16.85-1.97-7.23 1.87-15.41 8.64-18.58 5.84-2.93 13.44-1.88 18.19 2.65 3.3 3.18 6.48 6.5 9.75 9.72 13.02-9.43 28.26-15.74 44.13-18.31.51-7.16-1.55-15.07 2.39-21.55m5.42 8.96c-.02 19.01 0 38.01-.01 57.02 5.63-.76 11.35-.72 16.99.01-.01-18.99.01-37.99-.01-56.98.37-4.69-3.72-9.11-8.44-8.98-4.75-.23-8.91 4.21-8.53 8.93m-47.74 35.09c9.47 9.46 18.92 18.94 28.41 28.38 3.71-1.87 7.55-3.49 11.52-4.75.01-13.4 0-26.8 0-40.2-14.32 2.49-28.07 8.16-39.93 16.57m72.51-16.56c.02 13.4-.04 26.81.03 40.22 3.97 1.23 7.79 2.86 11.49 4.73 9.46-9.48 18.95-18.93 28.39-28.42-11.85-8.4-25.6-14.07-39.91-16.53m-103.3 8.45c-3.42 3.08-3.56 8.97-.19 12.14 13.52 13.62 27.15 27.12 40.67 40.73 3.42-4.55 7.48-8.59 12.01-12.04-13.56-13.55-27.08-27.13-40.68-40.64-3.06-3.22-8.65-3.31-11.81-.19m162.17.22c-13.57 13.5-27.05 27.08-40.63 40.57 4.45 3.54 8.6 7.5 11.98 12.1l40.67-40.72c3.16-3.02 3.29-8.48.31-11.67-3.04-3.58-9.13-3.73-12.33-.28m4.13 30.92c-9.5 9.46-18.97 18.95-28.46 28.42 1.91 3.68 3.52 7.51 4.75 11.48 13.41.09 26.81-.02 40.22.05-2.37-14.35-8.16-28.06-16.51-39.95m-175.09 39.92c13.41-.01 26.82.08 40.23-.05 1.18-3.96 2.82-7.77 4.71-11.44-9.48-9.47-18.94-18.95-28.43-28.42-8.39 11.86-14.07 25.59-16.51 39.91m84.14-32.4c-10.28 2.43-19.72 8.22-26.53 16.29-8.7 10.16-13.01 23.91-11.65 37.22 1.21 13.77 8.55 26.81 19.58 35.11 10.49 8.01 24.22 11.61 37.29 9.67 14.56-1.95 27.97-10.78 35.62-23.31 7.25-11.63 9.32-26.32 5.65-39.52-3.51-13.08-12.63-24.52-24.6-30.87-10.69-5.82-23.54-7.42-35.36-4.59m-111.66 48.38c-.29 4.56 3.7 8.82 8.28 8.78 19.24.09 38.48-.02 57.71.05-.75-5.64-.73-11.36 0-17.01-19.21.03-38.42-.03-57.63.03-4.39-.08-8.25 3.8-8.36 8.15m180.62-8.18c.74 5.64.75 11.36 0 17 19.25-.05 38.51.04 57.76-.04 4.2.02 7.93-3.6 8.21-7.76.5-4.68-3.53-9.28-8.29-9.16-19.22-.08-38.45 0-57.68-.04m-153.11 24.82c2.44 14.31 8.11 28.07 16.55 39.9 9.46-9.48 18.95-18.93 28.4-28.43-1.91-3.68-3.5-7.52-4.77-11.47-13.39-.01-26.79 0-40.18 0m146.66 11.46c9.46 9.51 18.96 18.96 28.43 28.45 8.38-11.87 14.09-25.6 16.53-39.93-13.4.02-26.8 0-40.2.01-1.28 3.94-2.83 7.79-4.76 11.47m-138.17 47.59c-3.14 3.05-3.08 8.53-.06 11.64 3.03 3.38 8.81 3.57 12.03.35 13.66-13.56 27.22-27.22 40.83-40.84-4.5-3.46-8.57-7.47-11.99-12-13.58 13.64-27.24 27.2-40.81 40.85m133.82-40.94c-3.34 4.61-7.48 8.61-11.99 12.08 13.63 13.59 27.2 27.25 40.86 40.82 3.01 3.06 8.35 3.08 11.47.18 3.56-2.96 3.8-8.93.49-12.17-13.57-13.67-27.28-27.21-40.83-40.91m-74.26 16.43c-9.49 9.47-18.97 18.95-28.46 28.43 11.88 8.37 25.59 14.1 39.92 16.55.03-13.41.02-26.82 0-40.22-3.95-1.25-7.78-2.85-11.46-4.76m44.08 4.75c.01 13.41-.01 26.82.01 40.23 14.32-2.48 28.03-8.18 39.91-16.54-9.5-9.47-18.96-18.98-28.45-28.46-3.67 1.93-7.52 3.5-11.47 4.77m-24.82 1.7l.02 57.34c-.24 4.62 3.91 8.75 8.5 8.66 4.6.12 8.69-4.06 8.46-8.67.05-19.11-.01-38.22.03-57.33-5.65.76-11.37.78-17.01 0zM233.53 217.74c13.48-3.96 28.75 5.47 31.34 19.24 3.29 13.39-6.43 28-19.98 30.3-12.97 2.88-26.95-6.25-29.64-19.22-3.34-12.9 5.36-27.22 18.28-30.32m.83 5.85c-8.59 2.45-14.74 11.36-13.85 20.28.56 9.49 8.98 17.74 18.51 17.97 8.25.61 16.38-4.79 19.26-12.5 2.81-7.09.95-15.76-4.61-21-4.94-4.96-12.63-6.83-19.31-4.75zM363.85 302.94c-.07-3.2 2.96-5.79 6.08-5.56 12.61-.06 25.22.01 37.83-.03 2.82 0 5.64 0 8.46.01 4.79 0 9.57.01 14.37-.01 4.23-.01 8.47.02 12.71.02 10.57 0 21.15-.03 31.72 0 3.19-.28 6.36 2.27 6.31 5.57.17 8.93.01 17.86.06 26.78 4.54.09 9.09-.22 13.62.11 2.98.22 5.21 3.16 5.02 6.08.03 10.38.03 20.78.01 31.16.26 2.78-1.36 5.71-4.15 6.44-3.26.54-6.58.21-9.86.25-.07 6.88 0 13.77-.05 20.66 6.97.1 13.94-.17 20.9.1 2.6.12 4.37 2.37 5.12 4.67v34.4c-.66 2.41-2.56 4.7-5.22 4.8-4.91.28-9.83 0-14.75.1.01 8.88.08 17.77-.04 26.65.1 3.17-2.8 5.89-5.94 5.7-35.03.08-70.06.01-105.08.04-3.34.35-6.7-2.37-6.53-5.82-.12-7.17.02-14.35-.03-21.51 0-4.24-.11-8.48.08-12.7 1.02-1.73 2.33-3.66 4.51-3.9 5.11-.42 10.25-.04 15.37-.19-.01-6.87-.01-13.73 0-20.59-4.47-.03-8.92-.06-13.38-.03-3.68-.02-7.56.48-10.96-1.27-1.77-2.53-1.83-5.63-1.71-8.59.13-9.42-.05-18.84.07-28.26-.13-2.78 2-5.5 4.8-5.83 3.07-.28 6.15-.1 9.23-.13v-20.63c-4.41-.07-8.83.14-13.23-.08-3.22-.05-5.72-3.19-5.41-6.32.05-10.7-.1-21.4.07-32.09m11.64 6.12l-.01 20.65c31.39-.02 62.79.04 94.19 0 .02-6.88 0-13.75 0-20.62-31.39-.07-62.79 0-94.18-.03m18.63 32.36c.04 6.88-.03 13.76 0 20.65 31.41-.01 62.81-.01 94.22-.01.01-6.88.01-13.76 0-20.63-31.4.01-62.81-.03-94.22-.01m-14.05 32.35c.06 6.88-.03 13.77 0 20.65 31.4-.14 62.8.1 94.2 0 .02-6.88.01-13.76.01-20.63l-94.21-.02m26 32.36c.05 6.88-.02 13.77.01 20.66 31.4.05 62.8-.12 94.19 0 .03-6.89.01-13.77 0-20.66-31.4.01-62.8.02-94.2 0m-19.95 32.36c-.03 6.88.05 13.76 0 20.64l94.21.03c-.01-6.87.01-13.74-.01-20.61-31.4-.19-62.81.03-94.2-.06z"/></g></svg>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g fill="#01305d"><path d="M387.03 28.2c39.65-.16 79.3-.06 118.95-.06 2.42-.14 3.81 3.24 2.07 4.9-1.01 1.24-2.68.87-4.06.93-38.69-.02-77.39.05-116.08-.01-3.37.31-4.01-4.92-.88-5.76zM324.49 57.5l1.33-.81c27.73-.04 55.46-.1 83.18.03 3.07.61 2.76 5.57-.36 5.76-27.23.08-54.47.02-81.71.03-2.6.44-4.57-3.24-2.44-5.01zM0 87.96c.82-3.02 3.87-5.05 6.97-4.67 166.05.01 332.1 0 498.15 0 3.03-.35 5.8 1.63 6.88 4.4v336.3c-.82 3-3.83 5.04-6.91 4.7h-498.12c-3.05.37-5.88-1.57-6.97-4.37v-336.36m12.17 7.09c-.02 1.59-.03 3.18.04 4.77-.09 104.34.07 208.68-.08 313.01l.67-.53c-1.25 1.17-.4 3.15-.63 4.66 2.47.06 4.94.08 7.4 0 155.47.06 310.93.02 466.4.02 2.13.22 4.28-.44 6.36.37l-.28-1.2.2.55c2.47.68 5.02.21 7.55.27.03-1.57.04-3.14-.03-4.7 0-104.12.12-208.24-.06-312.35.1-1.63.11-3.26.1-4.88-2.13-.08-4.26-.11-6.38 0-158.25-.09-316.51-.01-474.76-.05l.91.87c-1.93-1.79-5.01-.53-7.41-.81z"/></g><path fill="#1096fc" d="M12.17 95.05c2.4.28 5.48-.98 7.41.81 79.2 70.66 158.39 141.32 237.61 211.94 78.76-70.89 157.47-141.86 236.24-212.76 2.12-.11 4.25-.08 6.38 0 .01 1.62 0 3.25-.1 4.88-58.23 52.78-116.8 105.2-175.13 157.88 58.34 51.56 116.92 102.84 175.19 154.47.07 1.56.06 3.13.03 4.7-2.53-.06-5.08.41-7.55-.27l-.2-.55-.19-.56c-26.15-22.6-51.92-45.68-77.94-68.46l-95.28-83.94c-19.58 17.51-39.04 35.17-58.6 52.72-1.55 1.58-4.32 1.48-5.83-.1-17.48-15.58-34.94-31.18-52.43-46.76l-.45-.02c-60.58 49.31-121.15 98.64-181.76 147.93-2.46.08-4.93.06-7.4 0 .23-1.51-.62-3.49.63-4.66 60.92-49.62 121.85-99.21 182.8-148.78-61.12-54.57-122.36-109.02-183.39-163.7-.07-1.59-.06-3.18-.04-4.77z"/></svg>
              </div>

              <div className="col-md-6">
                <h3 className="h4">Building address/Mail handling</h3>

                <hr />

                <p>A Czech business address for you and your mail. We can either hold your mail for you to collect, or forward it on to wherever you are.</p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="h4">Call answering</h3>

                <hr />

                <p>We’ll provide someone to answer your calls professionally using your company name. They’ll be put through to you, or we’ll take a message if you’re unavailable.</p>
              </div>

              <div className="col-md-6 text-center">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g fill="#1096fc"><path d="M329.44 0h10.11c28 .68 55.98 6.46 81.55 17.99 27.01 12.18 51.58 30.94 68 55.83 13.11 19.7 20.35 43.46 19.3 67.18-.82 23.13-9.46 45.62-23.22 64.11-13.61 18.44-31.81 33.19-51.9 44.05-26.52 14.34-56.36 22.07-86.39 23.77-1.5-.22-1.9 1.5-2.62 2.4-6.6 11.28-15.72 21.12-26.64 28.33-14.28 9.44-31.62 13.94-48.67 13.47-4.84-.24-6.97-7.25-3.09-10.13 5.59-4.16 11.17-9.58 11.97-16.89.87-9.25-3.84-17.8-8.47-25.45-1.1-2.63-4.15-2.89-6.48-3.82-17.83-6.36-34.78-15.35-49.77-26.95-21.02-16.21-38.21-38.11-46.34-63.58-7.9-24.28-6.84-51.27 2.76-74.9 10.55-26.42 30.65-48.2 54.22-63.71 31.21-20.51 68.52-30.65 105.68-31.7m-34.95 15.73c-32.83 6.55-64.6 21.45-88.28 45.45-17.54 17.65-30.07 40.91-32.43 65.89-2.6 24.37 4.85 49.22 19.01 69.05 18.42 26 46.35 44.09 76.2 54.37 2.63 1.08 6.03 1.3 7.7 3.92 5.32 7.79 10.1 16.22 12.16 25.51 1.91 8.12.79 17.01-3.73 24.11 17.44-2.82 33.37-12.9 43.89-27.02 3.15-4.05 5.67-8.52 8.14-13 1.53-2.81 5.04-2.72 7.8-2.79 38.08-1.85 76.28-14.11 106.34-37.96 20.84-16.54 37.44-39.44 43.13-65.72 5.32-23.66 1.07-49.05-10.83-70.08-14.52-25.98-38.72-45.46-65.45-57.88-38.33-17.7-82.35-21.93-123.65-13.85zM231.4 97.42c1.41-.74 3.09-.35 4.62-.48 42.36.02 84.71.01 127.07.01 2.55-.2 4.74 2.53 3.92 4.98-.51 2.19-2.91 3.11-4.96 2.87-43.01-.08-86.02.06-129.03-.07-3.78.06-5.05-5.73-1.62-7.31zM390.35 97.47c5.75-1.1 11.87-.32 17.76-.48 4.2-.27 5.31 6.35 1.31 7.55-5.78.54-11.65.16-17.46.18-3.69-.01-4.91-5.63-1.61-7.25zM466.36 101.38c1.84-.99 4.43-.06 5.19 1.9 6.82 18.42 7.02 39.15.87 57.78-5.53 16.95-16.03 32.23-29.82 43.51-2.15 2.01-6.07.47-6.32-2.42-.44-1.91 1.05-3.38 2.4-4.46 13.9-11.72 24.02-27.93 28.18-45.66 3.62-14.96 2.71-30.93-2.36-45.45-.9-1.89-.09-4.36 1.86-5.2zM232.28 131.4c29.23-.31 58.48-.05 87.73-.13 2.58-.41 5.2 2.05 4.49 4.69-.28 2.07-2.47 3.33-4.43 3.15-29.05-.09-58.1.1-87.15-.09-4.24-.02-4.78-6.84-.64-7.62zM348.38 131.48c20.08-.44 40.24-.19 60.34-.12 4.6.38 3.98 8.03-.64 7.69-19.38.08-38.76.06-58.14.02-4.36.5-5.72-6.35-1.56-7.59zM232.37 168.52c30.55-.27 61.13-.02 91.69-.12 1.96-.22 4.31.64 4.79 2.76.95 2.48-1.39 5.3-3.98 5.07-30.6-.06-61.19.06-91.79-.06-4.37.14-5.04-6.97-.71-7.65zM344.43 168.6c4.36-.39 8.8-.23 13.18-.09 3.87.53 4.1 6.62.34 7.55-4.33.3-8.69.18-13.02.09-3.87-.49-4.25-6.56-.5-7.55zM410.41 213.55c1.5-.55 3.31-.83 4.61.35 2.39 1.68 1.72 5.87-1.08 6.68-4.87 1.69-9.9 3.04-15.01 3.68-2.85.22-4.92-3.36-3.4-5.75.84-1.78 2.92-1.97 4.63-2.33 3.47-.62 6.89-1.55 10.25-2.63z"/></g><g fill="#01305d"><path d="M108.35 141.55c2.12-1.46 5.16-.06 5.85 2.32 13.45 32.47 27.03 64.89 40.46 97.38 1.21 2.13-.37 5.11-2.77 5.44-2.05.46-4.02-1.02-4.6-2.94-13.45-32.29-26.9-64.57-40.29-96.88-1.03-1.8-.5-4.29 1.35-5.32zM38.07 154.08c11.69-5.9 24.9-8.31 37.91-8.62 5.53.09 11.48.25 16.33 3.24 3.14 1.9 3.82 5.74 5.15 8.88 12.26 30.95 24.55 61.89 36.84 92.83 1.99 4.71-1.37 9.32-3.68 13.23-7.26 10.82-16.26 20.33-25.29 29.68-1.63 1.82-3.8 3.3-4.87 5.55 2.26 6.34 6.96 11.38 10.85 16.75 25.06 31.38 53.48 60.1 84.7 85.37 6.38 4.87 12.46 10.49 20.01 13.49 9.13-9.05 18.25-18.16 28.35-26.14 4.25-3.22 8.63-6.5 13.74-8.21 1.79-.67 3.77-.59 5.52.18 32.92 13.1 65.86 26.19 98.79 39.26 4.17 2.48 5.26 7.76 5.87 12.21.99 11.62-.63 23.39-4.04 34.51-1.99 6.13-4.52 12.24-8.61 17.29-16.16 18.04-40.21 27.74-64.2 28.42h-7.76c-31.39-1.44-61.33-13.07-88.62-28.03-41.23-22.98-77.64-53.96-109.2-88.92-25.79-28.92-48.51-60.94-64.56-96.32-10.83-24.37-18.65-50.75-17.68-77.65.63-17.99 6.06-36.03 16.88-50.55 4.87-6.39 10.2-12.86 17.57-16.45m18.93 5.43c-6.52 1.6-13.2 3.75-18.42 8.13-5.74 5.36-10.52 11.74-14.21 18.67-9.3 17.52-10.75 38.19-7.8 57.52 4.6 30.16 17.79 58.28 33.52 84.15 18.62 30.4 41.63 57.97 67.15 82.81 20.18 19.47 42.06 37.26 65.72 52.35 17.16 10.9 35.27 20.44 54.42 27.38 20.9 7.43 43.5 12.04 65.67 8.46 15.04-2.28 29.31-9.2 40.37-19.65 7.19-6.21 9.97-15.81 11.85-24.78 1.39-8.22 2.5-16.78.71-25.02-32.05-12.59-64.02-25.39-96.01-38.12-3.69 2.02-6.92 4.73-10.14 7.41-8.68 7.29-16.83 15.18-24.81 23.23-2.25 2.48-5.92 2.74-9.03 2.16-5.1-1.05-9.8-3.42-14.31-5.95-11.92-7.01-22.58-15.91-32.93-25.02-14.91-13.34-29.13-27.46-42.64-42.21-10.35-11.46-20.52-23.22-28.56-36.45-3.48-6.02-7.19-12.46-7.23-19.61.08-5.19 5.24-7.87 8.19-11.46 8.64-9.39 18.45-18.1 24.77-29.31-12.81-32.05-25.49-64.15-38.23-96.23-9.32-1.7-18.88-.47-28.05 1.54zM271.23 360.31c1.28-.58 2.61-.08 3.82.43 31.2 13.24 62.42 26.44 93.63 39.67 1.85.58 3.45 2.35 3.06 4.41-.18 2.64-3.39 4.21-5.66 2.92l-92-38.93c-1.73-.84-3.96-1.23-4.91-3.08-1.08-1.98-.03-4.64 2.06-5.42z"/></g></svg>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-pricing" className="sec-pricing">
          <div className="container">
            <h1 className="h4 mb-5 text-center">Great prices for everyone</h1>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-block">
                    <h4 className="card-title h5">Individual</h4>

                    <h5 className="card-title h6">100 &euro;/month</h5>

                    <p className="card-text">The flexible place to grow your projects in a community of start-ups, freelancers and entrepreneurs, flex desk.</p>

                    <a href="#" className="btn btn-primary">Find out more</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-block">
                    <h4 className="card-title h5">Small Group</h4>

                    <h5 className="card-title h6">320 &euro;/month</h5>

                    <p className="card-text">Your own personal area in an open space: desk, drawers, locker and bookcase to accessorise however you like.</p>

                    <a href="#" className="btn btn-primary">Find out more</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-block justify-content-center">
                    <h4 className="card-title h5">Large Group</h4>

                    <h5 className="card-title h6">640 &euro;/month</h5>

                    <p className="card-text">Your own private space, perfect for work teams of up to 50 people, inside a structure that’s always in motion</p>

                    <a href="#" className="btn btn-primary">Find out more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-testimonials" className="sec-testimonials">
          <div className="container">
            <h1 className="h4 mb-5 text-center">Words from our members</h1>

            <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <blockquote className="blockquote">
                        <small>The vibe here is bright and very optimistic. Clients love to visit us here and every day we make new friends and contacts with other start-ups. Being a a member is our secret super power.</small>

                        <footer className="blockquote-footer mt-2">Timothy Wilson, CTO</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <blockquote className="blockquote">
                        <small>I've been a memeber for over 3 years. We have always been welcomed by friendly faces and helpful staff. This co-working space has everything we need from Wi-Fi to fresh and delicious coffee.</small>

                        <footer className="blockquote-footer mt-2">Ziva Stark, CEO</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <blockquote className="blockquote">
                        <small>I joined since its opening and I couldn't have found a better working space. Being a member is so inspiring and I love the work environment: spacious, bright and full of entrepreneurs like me!</small>

                        <footer className="blockquote-footer mt-2">Teresa Swanson, CEO</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="fa fa-angle-left fa-2x"></span>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>

              <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="fa fa-angle-right fa-2x"></span>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>

        <section id="sec-contact" className="sec-contact pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-7">
                <h1 className="h4">Have a question? Get in touch with us!</h1>

                <form action="" method="">
                  <fieldset className="form-group">
                    <label htmlFor="formName">Your Name:</label>
                    <input id="formName" className="form-control" type="text" placeholder="Your Name" required></input>
                  </fieldset>

                  <fieldset className="form-group">
                    <label htmlFor="formEmail1">Email address:</label>
                    <input id="formEmail1" className="form-control" type="email" placeholder="Enter email" required></input>
                  </fieldset>

                  <fieldset className="form-group">
                    <label htmlFor="formMessage">Your Message:</label>
                    <textarea id="formMessage" className="form-control" rows="3" placeholder="Your message" required></textarea>
                  </fieldset>

                  <fieldset className="form-group text-center">
                    <button className="btn btn-primary" type="submit">Send Message</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <ul className="list-inline mb-0 text-center">
              <li className="list-inline-item">
                <a href=""><span className="fa fa-twitter"></span></a>
              </li>

              <li className="list-inline-item">
                <a href=""><span className="fa fa-google-plus"></span></a>
              </li>

              <li className="list-inline-item">
                <a href=""><span className="fa fa-instagram"></span></a>
              </li>

              <li className="list-inline-item">
                <a href=""><span className="fa fa-envelope-o"></span></a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

    );
  }
}

export default Home;
