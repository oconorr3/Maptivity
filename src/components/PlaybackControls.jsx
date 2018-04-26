import React from 'react';
import { Grid, Row, Col, Button, ProgressBar } from 'react-bootstrap';

import Icon from './Icon.jsx';

const PlaybackControls = ({isPlaying, togglePlayback, dataLabel, removeDataLabel, percentProgress, changeProgress, currentTimeScale, changeTimeScale}) => (
  <div>
    <ProgressBar now={percentProgress}/>
    <Col sm={1}>
      <Icon name='back' tip='Select Data' location='right' isSmall className='playback-button-back' onClick={removeDataLabel}/>
    </Col>
    <Col sm={3}>
      <h3 className='drawer-title'> {dataLabel} </h3>
    </Col>
    <Col sm={3} className='playback-time-scale'>
      <p>Time Remaining</p>
      <small>5 mins 25 seconds</small>
    </Col>
    <Col sm={3} className='playback-time-scale'>
      <p>Time Scale Multiplier</p>
      <small>100x 1000x 10000x 100000x</small>
    </Col>
    <Col sm={2}>
      <Icon name={isPlaying ? 'pause' : 'play'} tip='Toggle Playback' onClick={togglePlayback} location='left' className='playback-button-toggle'/>
    </Col>
  </div>
);

export default PlaybackControls;
