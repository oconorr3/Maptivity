import propTypes from 'prop-types';
import React from 'react';
import Datamaps from 'datamaps';




/*const defaultOptions = {
    scope: 'world', //currently supports 'usa' and 'world', however with custom map data you can specify your own
    projection: 'mercator', //style of projection to be used. try "mercator"
    height: null, //if not null, datamaps will grab the height of 'element'
    width: null, //if not null, datamaps will grab the width of 'element'
    responsive: false, //if true, call `resize()` on the map object when it should adjust it's size
    done: function() {}, //callback when the map is done drawing
    fills: {
      defaultFill: '#ABDDA4' //the keys in this object map to the "fillKey" of [data] or [bubbles]
    },

    geographyConfig: {
        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 1,
        borderOpacity: 1,
        borderColor: '#FDFDFD',
        popupTemplate: function(geography, data) { //this function should just return a string
          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: true, //disable the popup while hovering
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
    },
    bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: null,
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        },
        fillOpacity: 0.75,
        animate: true,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        highlightFillOpacity: 0.85,
        exitDelay: 100,
        key: JSON.stringify
    },
    arcConfig: {
      strokeColor: '#DD1C77',
      strokeWidth: 1,
      arcSharpness: 1,
      animationSpeed: 600
    }
  };
*/
export default class Datamap extends React.Component {
  constructor(props) {
    super(props);
    //window.addEventListener('resize', this.resize);
  }

  resize() {
    //if (this.map) {
    //  console.log("resizing Map...");
    //  this.map.resize();
    //}
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
    let defaultColor = 'rgba(155, 224, 255, 0.5)';
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
      scope: 'world', //currently supports 'usa' and 'world', however with custom map data you can specify your own
      projection: 'mercator', //style of projection to be used. try "mercator"
      height: null, //if not null, datamaps will grab the height of 'element'
      width: null, //if not null, datamaps will grab the width of 'element'
      responsive: false, //if true, call `resize()` on the map object when it should adjust it's size
      geographyConfig: {
        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: false,
        borderWidth: 0.5,
        borderOpacity: 0.5,
        borderColor: '#FDFDFD',
        popupTemplate: function(geography, data) { //this function should just return a string
          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: false, //disable the popup while hovering
        highlightOnHover: false,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
      },
      fills: {
          defaultFill: '#0E151F'
        },

      //callback when the map is done drawing
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
