import React from 'react';
import { Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';
import ReactDrawer from 'react-drawer';
import axios from 'axios';
import classnames from 'classnames';
import 'react-drawer/lib/react-drawer.css';

import '../styles/MapNav.css';
import DataControls from './DataControls.jsx';
import PlaybackControls from './PlaybackControls.jsx';


export default class MapNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topOpen: false,
      bottomOpen: false,
      topButtonControlHover: false,
      bottomButtonControlHover: false,
      dataLabel: null,
    };

    //show menu items on page load for clarity (after 1 second delay for animation)
    setTimeout(() => {
      this.onMouseOverTopDrawer();
      this.onMouseOverBottomDrawer();

      //hide menu tabs if no user contact after 5 seconds
      this.onMouseLeaveTopDrawer(5000);
      this.onMouseLeaveBottomDrawer(5000);
    }, 1000);
  }

  retrieveData = (event) => {
    //this.props.updateData will call appropriate function on MapPage to setState
    let year = event.target.getAttribute('data-year');
    console.log(year);
    axios.get(`/data/${year}`)
      .then(response => {
        this.props.updateData(response.data);
        this.setState({
          dataLabel: `${year} Data`
        });
      })
      .catch(error => alert(error.message)); //shouldn't happen unless we provide invalid params
  }

  removeDataLabel = () => {
    this.setState({dataLabel: null});
  }

  onTopClose = (event) => {
    this.setState({
      topOpen: false
    });
  }

  //Mouse Events for Top Drawer
  onMouseOverTopDrawer = () => {
    window.clearTimeout(this.closeTopTimer);
    this.closeTopTimer = null;
    this.setState({
      topButtonControlHover: true
    });
  }

  onMouseLeaveTopDrawer = (waitTime) => {
    if(!this.closeTopTimer) //ensure multiple timers don't get stacked
      this.closeTopTimer = window.setTimeout(() => this.setState({ topButtonControlHover: false }), Number.isInteger(waitTime) ? waitTime : 1000); //execute the fade away if timer still exists after specified time or one second
  }

  //Mouse Events for Bottom Drawer
  onMouseOverBottomDrawer = () => {
    window.clearTimeout(this.closeBottomTimer);
    this.closeBottomTimer = null;
    this.setState({
      bottomButtonControlHover: true
    });
  }

  onMouseLeaveBottomDrawer = (waitTime) => {
    if(!this.closeBottomTimer)
      this.closeBottomTimer = window.setTimeout(() => this.setState({ bottomButtonControlHover: false }), Number.isInteger(waitTime) ? waitTime : 1000);
  }

  render() {
    let topDrawerTab = classnames('playback-drawer-tab', {
      'hidden': !this.state.topButtonControlHover,
      'fade-in-top-tab' : this.state.topButtonControlHover,
      'fade-out-top-tab' : !this.state.topButtonControlHover
    });
    let bottomDrawerTab = classnames('config-drawer-tab', {
      'hidden': !this.state.bottomButtonControlHover,
      'fade-in-bottom-tab' : this.state.bottomButtonControlHover,
      'fade-out-bottom-tab' : !this.state.bottomButtonControlHover
    });

    return (
      <div className='nav-content'>
        <div className='playback-container' onMouseEnter={this.onMouseOverTopDrawer} onMouseLeave={this.onMouseLeaveTopDrawer}>
          <ReactDrawer
            open={this.state.topOpen}
            position='top'
            onClose={this.onTopClose}
            noOverlay>
            <Row onMouseEnter={this.onMouseOverTopDrawer} onMouseLeave={this.onMouseLeaveTopDrawer}>
              {!this.state.dataLabel
                ? <DataControls retrieveData={this.retrieveData}/>
                : <PlaybackControls
                  isPlaying={this.props.isSimulationPlaying}
                  togglePlayback={this.props.togglePlayback}
                  dataLabel={this.state.dataLabel}
                  removeDataLabel={this.removeDataLabel}
                  percentProgress={50}
                  />}
            </Row>
            <Row className='zero-height'>
              <Button onMouseEnter={this.onMouseOverTopDrawer} onMouseLeave={this.onMouseLeaveTopDrawer} className={topDrawerTab} onClick={() => this.setState({ topOpen: !this.state.topOpen })}>
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
                onMouseLeave={this.onMouseLeaveBottomDrawer} className={bottomDrawerTab} onClick={() => this.setState({ bottomOpen: !this.state.bottomOpen })}>
                Stats
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
