import React from 'react';
import { Col } from 'react-bootstrap';

const StatLabel = ({title, count, index}) => (
  <Col sm={2}>
    <h4 className='config-drawer-title text-white'> {title} </h4>
    <hr></hr>
    <h4 className='config-drawer-title text-white'> {count} </h4>
  </Col>
);

export default StatLabel;