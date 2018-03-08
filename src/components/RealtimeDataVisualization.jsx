import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppNavbar from './AppNavbar.jsx';

import PropTypes from 'prop-types';

import Datamaps from 'datamaps';

class RealtimeDataVisualization extends React.Component {


    	constructor(props) {
    		super(props);
    		this.resizeMap = this.resizeMap.bind(this);
    	}

    	componentDidMount() {
    		if (this.props.responsive) {
    			window.addEventListener('resize', this.resizeMap);
    		}
    		this.drawMap();
    	}

    	componentWillReceiveProps(newProps) {
    		if (propChangeRequiresMapClear(this.props, newProps)) {
    			this.clear();
    		}
    	}

    	componentDidUpdate() {
    		this.drawMap();
    	}

    	componentWillUnmount() {
    		this.clear();
    		if (this.props.responsive) {
    			window.removeEventListener('resize', this.resizeMap);
    		}
    	}

    	clear() {
    		const { container } = this.refs;

    		for (const child of Array.from(container.childNodes)) {
    			container.removeChild(child);
    		}

    		delete this.map;
    	}

    	drawMap() {
    		const {
    			arc,
    			arcOptions,
    			bubbles,
    			bubbleOptions,
    			data,
    			graticule,
    			labels,
    			updateChoroplethOptions
    			//...props
    		} = this.props;

    		let map = this.map;

    		if (!map) {
    			map = this.map = new Datamaps({
    				//...props,
    				data,
    				element: this.refs.container
    			});
    		}
    	}

    	resizeMap() {
    		this.map.resize();
    	}

      render() {
    		const style = {
    			height: '100%',
    			position: 'relative',
    			width: '100%'
    		};

    		return (

                <div>
                    <AppNavbar></AppNavbar>
                    <div ref="container" style={style} />
                </div>
        );
    	}

  }

  function mapStateToProps(state) {
      const { RealtimeDataVisualization } = state.authentication;
      return {
          RealtimeDataVisualization
      };
  }

  const connectedRealtimeDataVisualization = connect(mapStateToProps)(RealtimeDataVisualization);
  export default RealtimeDataVisualization;
