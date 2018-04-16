import React from 'react';
import { Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';
import ReactDrawer from 'react-drawer';
import axios from 'axios';
import PlaybackControl from './PlaybackControl.jsx';

import 'react-drawer/lib/react-drawer.css';

export default class MapNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftOpen: false,
      bottomOpen: false,
      loadedData: 'No Data Loaded'
    };
  }

  retrieveData = (event) => {
    //this.props.updateData will call appropriate function on MapPage to setState
    let year = event.target.getAttribute('data-year');
    console.log(year);
    axios.get(`/data/${year}.json`)
      .then(response => {
        console.log(response);
        this.props.updateData(response.data);
        this.setState({
          leftOpen: false,
          bottomOpen: true
        });
      })
      .catch(error => alert(error.message)); //shouldn't happen unless we provide invalid params
  }

  onLeftClose = (event) => {
    this.setState({
      leftOpen: false
    });
  }



  render() {
    const wrapperStyle = { width: 400, margin: 50 };

    return (
      <div className='nav-content'>
        <ReactDrawer
          open={this.state.leftOpen}
          position='left'
          onClose={this.onLeftClose}>
            <h2 className='nav-title'> Data </h2>
            <Button onClick={this.retrieveData} data-year={2017}>Retrieve 2017 Phone Data</Button>
        </ReactDrawer>
        <Button className="top-right-button" onClick={() => this.setState({ leftOpen: !this.state.leftOpen })}>
            Open Data Nav Bar
        </Button>

        <ReactDrawer
          open={this.state.bottomOpen}
          position='bottom'
          noOverlay>
          <Grid fluid={true}>
            <Row>
              <Col lg={1}>
                <h5 className='config-drawer-title'> Total </h5>
                <hr></hr>
              </Col>
              <Col lg={3}>
                <h5 className='config-drawer-title'> Playback </h5>
                <hr></hr>
                <p className='text-faded'>{this.state.loadedData}</p>
                <hr></hr>
                <PlaybackControl></PlaybackControl>
              </Col>
              <Col lg={2}>
                <h5 className='config-drawer-title'> North America </h5>
                <hr></hr>
              </Col>
              <Col lg={2}>
                <h5 className='config-drawer-title'> South America </h5>
                <hr></hr>
              </Col>
              <Col lg={1}>
                <h5 className='config-drawer-title'> Europe </h5>
                <hr></hr>
              </Col>
              <Col lg={1}>
                <h5 className='config-drawer-title'> Africa </h5>
                <hr></hr>
              </Col>
              <Col lg={1}>
                <h5 className='config-drawer-title'> Asia </h5>
                <hr></hr>
              </Col>
            </Row>
          </Grid>
        </ReactDrawer>
        <Button className="top-right-button-config" onClick={() => this.setState({ bottomOpen: !this.state.bottomOpen })}>
            Toggle Config Nav Bar
        </Button>

      </div>
    );
  }
}
