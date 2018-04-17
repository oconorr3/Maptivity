import React from 'react';
import { Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';
import ReactDrawer from 'react-drawer';
import axios from 'axios';
import PlaybackControl from './PlaybackControl.jsx';
import classnames from 'classnames';

import '../styles.css';

import 'react-drawer/lib/react-drawer.css';

export default class MapNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topOpen: false,
      bottomOpen: false,
      dataLabel: null,
      topButtonControlHover: true, //show on page load for clarity
      bottomButtonControlHover: true
    };
  }

  retrieveData = (event) => {
    //this.props.updateData will call appropriate function on MapPage to setState
    let year = event.target.getAttribute('data-year');
    console.log(year);
    axios.get(`/data/${year}`)
      .then(response => {
        this.props.updateData(response.data);
        this.setState({
          bottomOpen: true, //open config bar for statistics and options when playback begins
          dataLabel: `${year} Data`
        });
      })
      .catch(error => alert(error.message)); //shouldn't happen unless we provide invalid params
  }

  onTopClose = (event) => {
    this.setState({
      topOpen: false
    });
  }

  //Mouse Events for Top Drawer
  onMouseOverTopDrawer = () => {
    this.setState({
      topButtonControlHover: true
    });
  }

  onMouseLeaveTopDrawer = () => {
      this.setState({
        topButtonControlHover: false
      });
  }

  //Mouse Events for Bottom Drawer
  onMouseOverBottomDrawer = () => {
    this.setState({
      bottomButtonControlHover: true
    });
  }

  onMouseLeaveBottomDrawer = (event) => {
      this.setState({
        bottomButtonControlHover: false
      });
  }


  render() {
    let topDrawerButton = classnames('playback-drawer-control', {
      'hidden': !this.state.topButtonControlHover
    });
    let bottomDrawerButton = classnames('config-drawer-control', {
      'hidden': !this.state.bottomButtonControlHover
    });

    return (
      <div className='nav-content'>
        <Button className="top-right-button-playback" onClick={this.props.togglePlayback} disabled={!this.state.dataLabel}>
            Toggle Playback
        </Button>

        <div className='playback-container' onMouseEnter={this.onMouseOverTopDrawer} onMouseLeave={this.onMouseLeaveTopDrawer}>
          <ReactDrawer
            open={this.state.topOpen}
            position='top'
            onClose={this.onTopClose}
            noOverlay>
            <Row onMouseEnter={this.onMouseOverTopDrawer} onMouseLeave={this.onMouseLeaveTopDrawer}>
              <h3 className='playback-drawer-title'> Data </h3>
              <Button className='playback-drawer-button' onClick={this.retrieveData} data-year={2015}>Retrieve 2015 Phone Data</Button>
              <Button className='playback-drawer-button' onClick={this.retrieveData} data-year={2016}>Retrieve 2016 Phone Data</Button>
            </Row>
            <Row className='zero-height'>
              <Button onMouseEnter={this.onMouseOverTopDrawer} onMouseLeave={this.onMouseLeaveTopDrawer} className={topDrawerButton} onClick={() => this.setState({ topOpen: !this.state.topOpen })}>
                Data
              </Button>
            </Row>
            <Row></Row>
          </ReactDrawer>
        </div>

        <div className='config-container' onMouseEnter={this.onMouseOverBottomDrawer}
          onMouseLeave={this.onMouseLeaveBottomDrawer}>
          <ReactDrawer
            open={this.state.bottomOpen}
            position='bottom'
            noOverlay>
            <Row className='zero-height'>
              <Button onMouseEnter={this.onMouseOverBottomDrawer}
                onMouseLeave={this.onMouseLeaveBottomDrawer} className={bottomDrawerButton} onClick={() => this.setState({ bottomOpen: !this.state.bottomOpen })}>
                Config
              </Button>
            </Row>
            <Row onMouseEnter={this.onMouseOverBottomDrawer} onMouseLeave={this.onMouseLeaveBottomDrawer}>
              <Grid fluid={true}>
                <Row>
                  <Col sm={2}>
                    <h5 className='config-drawer-title'> Total </h5>
                    <hr></hr>
                  </Col>
                  <Col sm={2}>
                    <h5 className='config-drawer-title'> North America </h5>
                    <hr></hr>
                  </Col>
                  <Col sm={2}>
                    <h5 className='config-drawer-title'> South America </h5>
                    <hr></hr>
                  </Col>
                  <Col sm={2}>
                    <h5 className='config-drawer-title'> Europe </h5>
                    <hr></hr>
                  </Col>
                  <Col sm={2}>
                    <h5 className='config-drawer-title'> Africa </h5>
                    <hr></hr>
                  </Col>
                  <Col sm={2}>
                    <h5 className='config-drawer-title'> Asia </h5>
                    <hr></hr>
                  </Col>
                </Row>
              </Grid>
            </Row>
          </ReactDrawer>
        </div>
      </div>
    );
  }
}
