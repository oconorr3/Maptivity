fadingBubbles = function(layer, data){
    
    console.log('running fading bubbles');
    // the datamap instance
    var self = this,
        className = 'fadingBubble',
        defaultColor = 'purple';
    
    // bind the data
    var bubbles = layer
        .selectAll(className)
        .data(data, JSON.stringify)
    
    // append the circles
    bubbles.enter()
        .append('circle')
        .attr('class', className)
        .attr('cx', function(datum) {

            return self.latLngToXY(datum.latitude, datum.longitude)[0];

        })
        .attr('cy', function(datum) {

            return self.latLngToXY(datum.latitude, datum.longitude)[1];

        })
        .attr('r', function(){
            
            /**
             * The initial radius of the circle. 
             * we will transition this value to a larger number
             */
            return 1;
        })
        .style('fill', function(d, i) {
            
            /**
             * If a fillKey was specified in the data, and if the datamap
             * was initialized with the "fills" option, then use the color
             * of this fill key for this bubble
             */
            if (self.options.fills && d.fillKey) {

                if (self.options.fills[d.fillKey]) {
                    return self.options.fills[d.fillKey];
                }
            }
            
            // no fillKey was specified, so use the default color
            return defaultColor;

        })
        .style('stroke', function(d, i) {
            
            // same logic as the fill property
            if (self.options.fills && d.fillKey) {

                if (self.options.fills[d.fillKey]) {
                    return self.options.fills[d.fillKey];
                }
            }
            return defaultColor;
        })
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr('r', function(datum) {
            
            /**
             * The size of the bubble can be controlled using the magnitude 
             * property
             */
            return datum.magnitude ? datum.magnitude * 20 : 22;
        
        })
        .style('fill-opacity', 1e-6)
        .style('stroke-opacity', 1e-6)
        .remove()

}


//START OF NONE FADING BUBBLES FUNCTION CODE
// map options
var options = {
    element: document.getElementById('map'),
    fills: {
        defaultFill: '#2c3e50'
    },
    geographyConfig: {

        highlightFillColor: 'rgba(52, 73, 94, .9)',
        highlightBorderOpacity: 0
    },
    scope: 'world',
    projection: 'mercator',
    projectionConfig: {
    }
};
        
// initiate the map    
var map = new Datamap(options);
            
// add the fading bubbles plugin
map.addPlugin('fadingBubbles', fadingBubbles);

var data = [
    {
        "latitude": "28.014067",
        "longitude": "-81.728676"
    },
    {
        "latitude": "40.750793",
        "longitude": "-73.989525",
        "magnitude": 3
    }
];

console.log("about to set");

setInterval(function () {map.fadingBubbles(data);}, 5000);
