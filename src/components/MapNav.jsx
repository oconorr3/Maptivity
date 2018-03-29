import React from 'react';
import {Link} from 'react-router-dom';
import { Clearfix, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';


export default class MapNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topLeftOpen: false,
      topRightOpen: false,
      bottomLeftOpen: false,
      bottomRightOpen: false
    };

  }

  render() {
    return (
      <div>
        <div>
          <Button className="top-left-button" onClick={() => this.setState({ topLeftOpen: !this.state.topLeftOpen })}>
            TL
          </Button>
          <Panel className="top-left-panel" id="collapsible-panel-example-1" expanded={this.state.topLeftOpen}
              onMouseLeave={() => this.setState({ topLeftOpen: !this.state.topLeftOpen })}>
            <Panel.Collapse>
              <Panel.Heading>
                <Panel.Title componentClass="h3">Something</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                topleftOpen
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
        <div>
          <Button className="top-right-button" onClick={() => this.setState({ topRightOpen: !this.state.topRightOpen })}>
            TR
          </Button>
          <Panel className="top-right-panel" id="collapsible-panel-example-1" expanded={this.state.topRightOpen}
              onMouseLeave={() => this.setState({ topRightOpen: !this.state.topRightOpen })}>
            <Panel.Collapse>
              <Panel.Heading>
                <Panel.Title componentClass="h3">Something</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                topRightOpen
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
        <Button className="bottom-left-button" onClick={() => this.setState({ bottomLeftOpen: !this.state.bottomLeftOpen })}>
          BL
        </Button>
        <Panel className="bottom-left-panel" id="collapsible-panel-example-1" expanded={this.state.bottomLeftOpen}
            onMouseLeave={() => this.setState({ bottomLeftOpen: !this.state.bottomLeftOpen })}>
          <Panel.Collapse>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Something</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              bottomLeftOpen
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Button className="bottom-right-button" onClick={() => this.setState({ bottomRightOpen: !this.state.bottomRightOpen })}>
          BR
        </Button>
        <Panel className="bottom-right-panel" bsStyle="info" id="collapsible-panel-example-1" expanded={this.state.bottomRightOpen}
            onMouseLeave={() => this.setState({ bottomRightOpen: !this.state.bottomRightOpen })}>
          <Panel.Collapse>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Legend</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              bottomRightOpen
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}
