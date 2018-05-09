import React from 'react';
import { Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';

import '../styles/MapNav.css';

const StatManager = ({countryCounters}) => {
  return (
    <div>
      <Grid fluid={true}>
        <Row>
          <Col sm={2}>
            <h4 className='config-drawer-title text-white'> Total </h4>
            <hr></hr>
            <h4 className='config-drawer-title text-white'> {countryCounters[0].count} </h4>
          </Col>
          <Col sm={2}>
            <h4 className='config-drawer-title text-white'> 'first'} </h4>
            <hr></hr>
            <h4 className='config-drawer-title text-white'> {countryCounters[1].count} </h4>
          </Col>
          <Col sm={2}>
            <h4 className='config-drawer-title text-white'> 'second' </h4>
            <hr></hr>
            <h4 className='config-drawer-title text-white'> {countryCounters[2].count} </h4>
          </Col>
          <Col sm={2}>
            <h4 className='config-drawer-title text-white'> 'third' </h4>
            <hr></hr>
            <h4 className='config-drawer-title text-white'> {countryCounters[3].count} </h4>
          </Col>
          <Col sm={2}>
            <h4 className='config-drawer-title text-white'> 'fourth' </h4>
            <hr></hr>
            <h4 className='config-drawer-title text-white'> {countryCounters[4].count} </h4>
          </Col>
          <Col sm={2}>
            <h4 className='config-drawer-title text-white'> 'fifth' </h4>
            <hr></hr>
            <h4 className='config-drawer-title text-white'> {countryCounters[5].count} </h4>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
