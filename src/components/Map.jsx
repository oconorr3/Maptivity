import propTypes from 'prop-types';
import React from 'react';
import WorldMap from 'datamaps/dist/datamaps.world.hires.js';
import USAMap from 'datamaps/dist/datamaps.usa.js';
import {Button} from 'react-bootstrap';
import moment from 'moment';

import TimedPlayback from '../TimedPlayback.js';

var selectedRegion = "world";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: false
    };
  }

  componentDidMount() {
    this.drawMap();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('component will update');
      //compare this.props.data to nextprops.data and only swap if different
  }

  componentDidUpdate() {

    if(this.props.isSimulationStarting && this.props.data) //called any time new data is loaded, destroys old timer
      this.drawBubbles();
    if(this.timer && this.timer.timeScale != this.props.timeScale) //ensure time scale is in sync on updates
      this.timer.updateTimeScale(this.props.timeScale);
    if(this.timer && this.props.isSimulationPlaying != this.timer.isPlaying){ //when this.props.togglePlayback is called(), make sure our timer playback matches
      this.togglePlay();
    }
  }

  componentWillUnmount() {
    this.clear();
    window.removeEventListener('resize', this.resize);
  }

  togglePlay() {
    if(this.timer.isPlaying)
      this.timer.pause();
    else
      this.timer.resume();
  }

  clear() {
    const container = this.refs.container;

    for (const child of Array.from(container.childNodes)) {
      container.removeChild(child);
    }
  }

  fadeBubble(layer, data) {
    let className = 'fadeBubble';
    let defaultColor = 'rgba(207, 69, 32, 0.2)';//<-VT orange....cyan->'rgba(155, 224, 255, 0.2)';
    let initialRadius = .1;
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
      .attr('r', data => data.magnitude ? data.magnitude * 1 : 10)
      .style('fill-opacity', 1e-6)
      .style('stroke-opacity', 1e-6)
      .remove();

  }

  stickBubble(layer, data) {
    let className = 'stickBubble';
    let defaultColor = 'rgba(207, 69, 32, 0.2)';//<-orange....cyan->'rgba(155, 224, 255, 0.2)';
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
      });
  }

  drawMap() {
    var map = new WorldMap({
      ...this.props,
      element: this.refs.container,
      scope: 'world', //currently supports 'usa' and 'world', however with custom map data you can specify your own
      //setProjection: this.setProjection,
      projection: 'equirectangular', //style of projection to be used. try "mercator"
      responsive: true, //if true, call `resize()` on the map object when it should adjust it's size
      geographyConfig: {
        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 0.5,
        borderOpacity: 0.7,
        borderColor: 'rgba(155, 224, 255, 1)', //'rgba(207, 69, 32, 1)'
        popupTemplate: function(geography, data) { //this function should just return a string
          return '<div class="hoverinfo"><strong>' +  geography.properties + '</strong></div>';
        },
        popupOnHover: false, //disable the popup while hovering
        highlightOnHover: false,
        highlightFillColor: 'rgba(240, 95, 54, 0.4)',
        highlightBorderColor: 'rgba(240, 95, 54, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
      },
      done: function(datamap) { //callback when the map is done drawing
          //Handling for when a region is selected
         datamap.svg.selectAll(".datamaps-subunit").on('click', function(geography) {
              if (geography.properties.name == selectedRegion) {
                  console.log("clearing...");
                  selectedRegion = "world";
              } else {
                console.log("focusing on " + geography.properties.name);
                selectedRegion = geography.properties.name;
              }
          });

         //Zoom functionality for mousewheel and panning (HAS BUG)
         datamap.svg.call(d3.behavior.zoom().scaleExtent([1, 4]).on("zoom", function() {
             var e = d3.event,
             // constrain the x and y components of the translation by the dimensions of the viewport
             tx = Math.min(0, Math.max(e.translate[0], window.innerWidth - window.innerWidth * e.scale)),
             ty = Math.min(0, Math.max(e.translate[1], window.innerHeight - window.innerHeight * e.scale));
             //update the <g> element's transform attribute with the correct translation and scale
             map.svg.selectAll("g").attr("transform", "translate(" + [tx, ty] + ")scale(" + e.scale + ")");
         }));
      },
      fills: {
          defaultFill: 'rgba(27, 39, 63, 1)',
      },
      data: {
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
    window.addEventListener('resize', function() {
        var newsize, oldsize, options;
        options = map.options;
        newsize = options.element.clientWidth;
        oldsize = d3.select(options.element).select('svg').attr('data-width');
        return d3.select(options.element).select('svg').selectAll('g').attr('transform', 'scale(' + (newsize / oldsize) + ')');
    });
    this.map.addPlugin('fadeBubble', this.fadeBubble.bind(this.map));
    this.map.addPlugin('stickBubble', this.stickBubble.bind(this.map));
  }

  drawBubbles = () => {
    let data = this.props.data;
    let first = moment(data[0].timestamp,"YYYY/MM/DD HH:mm:ss");
    let last = moment(data[data.length - 1].timestamp,"YYYY/MM/DD HH:mm:ss");
    let totalMilliseconds = last.diff(first);
    let totalDays = moment.duration(totalMilliseconds, 'milliseconds').asDays();
    console.log(`Total Days in Dataset --- ${totalDays} \n`);
    let totalSimulationTimeInMinutes = totalMilliseconds / 1000 / 60 / this.props.timeScale;
    console.log(`Total Simulation Time In minutes --- ${totalSimulationTimeInMinutes} \n`);
    if(this.timer) { //if we already had a simulation going, destroy old timeouts and this.timer
      this.timer.pause();
      this.timer = null;
    }
    this.timer = new TimedPlayback(data, this.props.timeScale, (datum) => {
        //this.props.updateCounters(datum.country_code);  //update the counters

        this.map.stickBubble([datum]);  //stick before we fade
        this.map.fadeBubble([datum]);

        if (!this.timer.data.length) { //if all data is processed
          console.log('reloading timer and putting into paused state');
          this.timer.data = this.props.data; //reload data
          this.props.togglePlayback(); //pause the simulation and timer
        }
    });
    if(this.props.isSimulationPlaying && !this.timer.isPlaying) //only plays timer when new data is loaded
      this.togglePlay();
  }

  render() {
    return (<div className="datamap" ref="container"></div>);
  }
}

Map.propTypes = {
  arc: propTypes.array,
  arcOptions: propTypes.object,
  bubbleOptions: propTypes.object,
  bubbles: propTypes.array,
  graticule: propTypes.bool,
  labels: propTypes.bool
};
