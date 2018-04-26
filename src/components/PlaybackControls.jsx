import React from 'react';
import { Grid, Row, Col, Button, ProgressBar } from 'react-bootstrap';

import Icon from './Icon.jsx';

const PlaybackControls = ({isPlaying, togglePlayback, dataLabel, removeDataLabel, elapsedSeconds, remainingSeconds, timeScale, changeTimeScale}) => (
  <div>
    <ProgressBar now={remainingSeconds ? elapsedSeconds/(elapsedSeconds + remainingSeconds)*100 : 0}/>
    <Col xs={1}>
      <Icon
        name='back'
        tip='Select Data'
        location='right'
        isSmall
        className='playback-button-back'
        onClick={removeDataLabel}/>
    </Col>
    <Col xs={3}>
      <h3 className='drawer-title'> {dataLabel} </h3>
    </Col>
    <Col xs={3} className='playback-time-label'>
      <p>Total Simulation Time</p>
      <small>{remainingSeconds.toFixed(0)} seconds</small>
    </Col>
    <Col xs={3} className='playback-time-label'>
      <p>Time Scale Multiplier</p>
      <small>
        <Icon
          name='minus'
          tip='Divide By 10'
          location='left'
          isSmall
          className='playback-button-time'
          onClick={() => changeTimeScale(timeScale / 10)}/>
        {timeScale}x
        <Icon
          name='plus'
          tip='Multiply By 10'
          location='right'
          isSmall
          className='playback-button-time'
          onClick={() => changeTimeScale(timeScale * 10)}/>
      </small>
    </Col>
    <Col xs={2}>
      <Icon name={isPlaying ? 'pause' : 'play'} tip='Toggle Playback' onClick={togglePlayback} location='left' className='playback-button-toggle'/>
    </Col>
  </div>
);

export default PlaybackControls;
