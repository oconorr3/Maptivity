import React from 'react';
import { ProgressBar, Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';

export default class PlaybackControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      barValue: 0,
      min: 0,
      max: 100,
      date:'12APR2018 00:00:00'
    };
  }

  handleUpdate = (value) => {
    this.setState({
      barValue: value
    })
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
                <Button className="btn-homepage" bsStyle="default">Play</Button>
                <Button className="btn-homepage" bsStyle="default">Stop</Button>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
