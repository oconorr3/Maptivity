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
      loadedData: 'No Data Loaded'
    };
  }

  retrieveData = (event) => {
    //this.props.updateData will call appropriate function on MapPage to setState
    let year = event.target.getAttribute('data-year');
    console.log(year);
    axios.get(`/data/${year}`)
      .then(response => {
        console.log(response);
        this.props.updateData(response.data);
        this.setState({
          topOpen: false,
          bottomOpen: true
        });
      })
      .catch(error => alert(error.message)); //shouldn't happen unless we provide invalid params
  }

  onTopClose = (event) => {
    this.setState({
      topOpen: false
    });
  }


  render() {
    const wrapperStyle = { width: 400, margin: 50 };
    let topDrawerButton = classnames('top-middle', {
      'hide': this.state.topOpen
    });
    console.log('top = ' + this.state.topOpen);
    console.log('bot = ' + this.state.bottomOpen);

    return (
      <div className='nav-content'>
        <ReactDrawer
          open={this.state.topOpen}
          position='top'
          onClose={this.onTopClose}
          noOverlay>
            <h2 className='playback-drawer-title'> Data </h2>
            <Button className='playback-drawer-button' onClick={this.retrieveData} data-year={2016}>Retrieve 2016 Phone Data</Button>
            <Row>
              <Button className='playback-drawer-control' onClick={() => this.setState({ topOpen: !this.state.topOpen })}>
                LOL
              </Button>
            </Row>
        </ReactDrawer>
        
        <ReactDrawer
          open={this.state.bottomOpen}
          position='bottom'
          noOverlay>
          <Row>
            <Button className='config-drawer-control' onClick={() => this.setState({ bottomOpen: !this.state.bottomOpen })}>
              LOL
            </Button>
          </Row>
          <Row>
            <Grid fluid={true}>
              <Row>
                <Col lg={2}>
                  <h5 className='config-drawer-title'> Total </h5>
                  <hr></hr>
                </Col>
                <Col lg={2}>
                  <h5 className='config-drawer-title'> North America </h5>
                  <hr></hr>
                </Col>
                <Col lg={2}>
                  <h5 className='config-drawer-title'> South America </h5>
                  <hr></hr>
                </Col>
                <Col lg={2}>
                  <h5 className='config-drawer-title'> Europe </h5>
                  <hr></hr>
                </Col>
                <Col lg={2}>
                  <h5 className='config-drawer-title'> Africa </h5>
                  <hr></hr>
                </Col>
                <Col lg={2}>
                  <h5 className='config-drawer-title'> Asia </h5>
                  <hr></hr>
                </Col>
              </Row>
          </Grid>
        </Row>
      </ReactDrawer>
    </div>
    );
  }
}
