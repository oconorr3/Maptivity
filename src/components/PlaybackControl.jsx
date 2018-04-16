import React from 'react';
import { ProgressBar, Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';

export default class PlaybackControl extends React.Component {
  constructor(props) {
    super(props);

    var today = new Date();
    this.state = {
      active: false,
      barValue: 0,
      min: 0,
      max: 100,
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
      isPlay: false,
    };
  }

  handleUpdate = (value) => {
    this.setState({
      barValue: value
    });
  }

  playPause = () => {

    this.setState({
      isPlay: !this.state.isPlay
    })
    console.log(this.state.isPlay);

  }

  stopRestart = () => {

  }

  render() {
    return (
      <div>
        <Grid>
            <Row>
              <Col lg={3}>
                <Row>
                  <p className='text-faded'>{this.state.date}</p>
                </Row>
                <ProgressBar
                    active={this.state.active}
                    now={this.state.barValue}
                    label={`${this.state.barValue}%`}
                    min={this.state.min}
                    max={this.state.max}/>
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <Button active={this.state.active} bsStyle="default" onClick={this.playPause}>{this.state.isPlay ? 'Pause' : 'Play'}</Button>
                <Button active={this.state.active} bsStyle="default" ></Button>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
