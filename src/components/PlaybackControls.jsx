import React from 'react';
import { Grid, Row, Col, Button, ProgressBar } from 'react-bootstrap';


//return playback controller as pure component in Array to avoid extra divs from being created
const PlaybackControls = ({isPlaying, togglePlayback, dataLabel, removeDataLabel, percentProgress, changeProgress, currentTimeScale, changeTimeScale}) => (
    <div>
      <ProgressBar now={percentProgress}/>
      <Col sm={3}>
        <Button className='playback-drawer-button playback-drawer-button-left' onClick={removeDataLabel}> Back To Data Selection </Button>
      </Col>
      <Col sm={3}>
        <h4 className='playback-drawer-title'> {dataLabel} </h4>
      </Col>
      <Col sm={4} className='playback-time-scale'>
        <p>Time Scale Multiplier</p>
        <small>100x 1000x 10000x 100000x</small>
      </Col>
      <Col sm={2}>
      <Button className='playback-drawer-button playback-drawer-button-right' onClick={togglePlayback}>{isPlaying ? 'Pause' : 'Resume'}</Button>
      </Col>

    </div>
);

export default PlaybackControls;
