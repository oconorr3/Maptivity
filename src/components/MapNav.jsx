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
      topOpen: false,
      bottomOpen: false,
      dataLabel: null
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
          bottomOpen: true,
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



  render() {
    const wrapperStyle = { width: 400, margin: 50 };

    return (
      <div className='nav-content'>
        <Button className="top-right-button" onClick={() => this.setState({ topOpen: !this.state.topOpen })}>
            Open Data Nav Bar
        </Button>
        <Button className="top-right-button-config" onClick={this.props.togglePlayback}>
            Toggle Playback
        </Button>

        <ReactDrawer
          open={this.state.topOpen}
          position='top'
          onClose={this.onTopClose}
          noOverlay>
            <h2 className='playback-drawer-title'> Data </h2>
            <Button className='playback-drawer-button' onClick={this.retrieveData} data-year={2015}>Retrieve 2015 Phone Data</Button>
                <Button className='playback-drawer-button' onClick={this.retrieveData} data-year={2017}>Retrieve 2017 Phone Data</Button>
        </ReactDrawer>

        <ReactDrawer
          open={this.state.bottomOpen}
          position='bottom'
          noOverlay>
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
        </ReactDrawer>

      </div>
    );
  }
}
