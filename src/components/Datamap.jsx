import propTypes from 'prop-types';
import React from 'react';
import Datamaps from 'datamaps';

export default class Datamap extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('resize', this.resize);
  }

  resize() {
    if (this.map) {
      this.map.resize();
    }
  }

  componentDidMount() {
    this.drawMap();
  }

  componentWillReceiveProps() {
    this.clear();
  }

  componentDidUpdate() {
    this.drawMap();
  }

  componentWillUnmount() {
    this.clear();
    window.removeEventListener('resize', this.resize);
  }

  clear() {
    const container = this.refs.container;

    for (const child of Array.from(container.childNodes)) {
      container.removeChild(child);
    }
  }

  fadingBubbles(layer, data) {
    let className = 'fadingBubble';
    let defaultColor = 'blue';
    let initialRadius = 1;
    let bubbles = layer.selectAll(className).data(data, JSON.stringify) // bind the data

    bubbles.enter().append('circle')
      .attr('class', className)
      .attr('cx', data => this.latLngToXY(data.latitude, data.longitude)[0]) // this refers to the datamap instance in this case
      .attr('cy', data => this.latLngToXY(data.latitude, data.longitude)[1])
      .attr('r', () => initialRadius)
      .style('fill', data => { //check if 'fills' option is set and if fillkey was provided  in data
        if (this.options.fills && data.fillKey && this.options.fills[data.fillKey])
          return this.options.fills[data.fillKey];
        else
          return defaultColor; // no fillKey was specified, so use the default color
      })
      .style('stroke', data => {
        if (this.options.fills && data.fillKey && this.options.fills[data.fillKey])
          return this.options.fills[data.fillKey];
        else
          return defaultColor;
      })
      .transition().duration(2000).ease(Math.sqrt)
      .attr('r', data => data.magnitude ? data.magnitude * 20 : 22)
      .style('fill-opacity', 1e-6)
      .style('stroke-opacity', 1e-6)
      .remove();
  }

  drawMap() {
    var map = new Datamaps({
      ...this.props,
      element: this.refs.container,
      projection: 'mercator',
      responsive: true,
      geographyConfig: {
        borderColor: '#444',
        borderWidth: 0.2,
        dataurl: 'https://github.com/markmarkoh/datamaps/blob/master/dist/datamaps.world.hires.js'
      },

      done: function(datamap) {
         datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));

         function redraw() {
              datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
         }
      }
    });

    if (this.props.arc) {
      map.arc(this.props.arc, this.props.arcOptions);
    }

    if (this.props.bubbles) {
      map.bubbles(this.props.bubbles, this.props.bubbleOptions);
    }

    if (this.props.graticule) {
      map.graticule();
    }

    if (this.props.labels) {
      map.labels();
    }

    this.map = map;
    this.map.addPlugin('fadingBubbles', this.fadingBubbles.bind(this.map));
  }

  drawBubbles = () => {
    var data = [
      {
        "latitude": "28.014067",
        "longitude": "-81.728676"
      }, {
        "latitude": "40.750793",
        "longitude": "-73.989525",
        "magnitude": 3
      }
    ];

    this.map.fadingBubbles(data);
  }

  render() {
    const style = {
      position: 'absolute',
      width: '100%',
      height: '100%'
    };

    return (<div>
      <button onClick={this.drawBubbles}>Draw Fading Bubbles</button>
      <div ref="container" style={style}></div>
    </div>);
  }
}

Datamap.propTypes = {
  arc: propTypes.array,
  arcOptions: propTypes.object,
  bubbleOptions: propTypes.object,
  bubbles: propTypes.array,
  graticule: propTypes.bool,
  labels: propTypes.bool
};
