import React from 'react';
import { Row, Col, Image, Button, Panel } from 'react-bootstrap';
import ReactDrawer from 'react-drawer';
import axios from 'axios';

import 'react-drawer/lib/react-drawer.css';

export default class MapNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftOpen: false,
      bottomOpen: false,
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
          leftOpen: false
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
    return (
      <div className='nav-content'>
        <ReactDrawer
          open={this.state.leftOpen}
          position='left'
          onClose={this.onLeftClose}>
            <h2 className='nav-title'> Data </h2>
            <Button onClick={this.retrieveData} data-year={2016}>Retrieve 2016 Phone Data</Button>
        </ReactDrawer>
        <Button className="top-right-button" onClick={() => this.setState({ leftOpen: !this.state.leftOpen })}>
            Open Data Nav Bar
        </Button>

        <ReactDrawer
          open={this.state.bottomOpen}
          position='bottom'
          noOverlay>
            <Col md={6}>
              <h2 className='nav-title'> Config </h2>
              <Button>Config Stuff</Button>
            </Col>
            <Col md={6}>
              <h2 className='nav-title'> Config 2 </h2>
              <Button>Other Config Stuff</Button>
            </Col>
        </ReactDrawer>
        <Button className="top-right-button-config" onClick={() => this.setState({ bottomOpen: !this.state.bottomOpen })}>
            Toggle Config Nav Bar
        </Button>

      </div>
    );
  }
}
