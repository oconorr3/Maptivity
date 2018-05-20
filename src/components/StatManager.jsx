import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import '../styles/MapNav.css';
import StatLabel from './StatLabel.jsx';

const StatManager = ({countryCounters}) => {
  let topCounters = countryCounters.slice(0, 6);
  return (
      <Grid fluid={true}>
        <Row>
          {topCounters.map((country, index) => <StatLabel title={country.name} count={country.count} index={index} key={`${country.name}${index}`}/>)}
        </Row>
      </Grid>
  );
}

export default StatManager;
