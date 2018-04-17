import propTypes from 'prop-types';
import React from 'react';
import WorldMap from 'datamaps/dist/datamaps.world.hires.js';
import {Button} from 'react-bootstrap';
import moment from 'moment';

var selectedRegion = "world";
const zoomFactor = 0.9;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: false,
      timeScaleFactor: 10
    };
  }

  componentDidMount() {
    this.drawMap();
  }

  componentWillReceiveProps() {
    this.clear();
  }

  componentDidUpdate() {
    this.drawMap();
    console.log('updating, draw bubbles if data exists');
    if(this.props.data)
      this.drawBubbles();
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
    let initialRadius = 0.1;
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

  //Possible functionality for dynamically zooming to different geo regions
  /*setProjection (element, options) {
      if (currentProjection == "africa") {
          //zoom to Africa
          var projection = d3.geo.mercator()
            .center([23, -3])
            .rotate([4.4, 0])
            .scale(400)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
          var path = d3.geo.path()
            .projection(projection);

          return {path: path, projection: projection};

       } else if (currentProjection == "europe") {
          //Zoom on Europe
          var projection = d3.geo.mercator()
            .center([45, 60])
            .rotate([0, 0])
            .scale(400)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
          var path = d3.geo.path()
            .projection(projection);

        return { path: path, projection: projection };

       } else if (currentProjection == "india") {
         var projection = d3.geo.mercator()
              .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
              .scale(1000);
          var path = d3.geo.path().projection(projection);
          return { path: path, projection: projection };

       } else if (currentProject == "canada") {
          var projection = d3.geo.mercator()
             .center([-106.3468, 68.1304]) // always in [East Latitude, North Longitude]
             .scale(250)
             .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

             var path = d3.geo.path().projection(projection);
             return { path: path, projection: projection };
       }else { // (currentProjection == "world") {
          // Zoom in on World
          var projection = d3.geo.mercator()
            .center([10, -10])
            .rotate([0, 0])
            .scale(300)
            .translate([element.offsetWidth / 2, element.offsetHeight]);
          var path = d3.geo.path()
            .projection(projection);

          return {path: path, projection: projection};

      }
  }*/

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
        hideAntarctica: false,
        borderWidth: 0.5,
        borderOpacity: 0.7,
        borderColor: 'rgba(155, 224, 255, 1)',
        popupTemplate: function(geography, data) { //this function should just return a string
          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: false, //disable the popup while hovering
        highlightOnHover: true,
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
             console.log("zooming");
             var e = d3.event,
             // constrain the x and y components of the translation by the dimensions of the viewport
             tx = Math.min(0, Math.max(e.translate[0], window.innerWidth - window.innerWidth * e.scale)),
             ty = Math.min(0, Math.max(e.translate[1], window.innerHeight - window.innerHeight * e.scale));
             //update the <g> element's transform attribute with the correct translation and scale
             map.svg.selectAll("g").attr("transform", "translate(" + [tx, ty] + ")scale(" + e.scale + ")");
         }));
      },
      fills: {
          defaultFill: 'rgba(27, 39, 63, 1)'
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
    this.map.addPlugin('fadingBubbles', this.fadingBubbles.bind(this.map));
  }

  drawBubbles = () => {

    this.props.data.forEach((datum, index) => {
      let ms;
      let s;
      if (index == 0) {
        let now  = datum.timeStamp;
        let next = this.props.data[index + 1].timeStamp;
        //"timeStamp":"2016-01-05T05:09:00.000Z"
        ms = moment(next,"YYYY/MM/DD HH:mm:ss").diff(moment(now,"YYYY/MM/DD HH:mm:ss"));
        console.log('ms =' + ms);
        //let d = moment.duration(ms);
        //s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

        //console.log('now = ' + now);
        //console.log('next = ' + next);

        //console.log('s = ' + s);
        console.log('divided by timescale factor = ' + ms / this.state.timeScaleFactor);
      }
        setTimeout(() => {

            this.map.fadingBubbles([datum]);

        }, ms / this.state.timeScaleFactor);

    });
  }

  render() {
    return (
      <div>
        <Button className="top-middle" onClick={this.drawBubbles} disabled={!this.props.data}>Draw Fading Bubbles</Button>
        <div className="datamap" ref="container"></div>
      </div>
  );
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
