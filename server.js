const path = require('path');
const express = require('express');
const app = express();

const DIST_DIR = path.join(__dirname, 'public/');
const DATA_DIR = path.join(__dirname, 'data/');
const PORT = 3000;

app.use(express.static(DIST_DIR));

app.get('/data/:year', function(req, res) {
  let data = [{
	"timeStamp": "2017-01-01T12:41:06.000Z",
	"geoLocation": {
		"latitude": 38.02931,
		"longitude": -78.47668
	}
}, {
	"timeStamp": "2017-01-01T21:31:06.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-02T08:46:06.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-02T09:24:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-02T09:30:06.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-02T11:28:18.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-02T11:30:48.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-02T12:08:06.000Z",
	"geoLocation": {
		"latitude": 38.02931,
		"longitude": -78.47668
	}
}, {
	"timeStamp": "2017-01-02T12:12:30.000Z",
	"geoLocation": {
		"latitude": 36.06258,
		"longitude": -94.15743
	}
}, {
	"timeStamp": "2017-01-02T12:16:36.000Z",
	"geoLocation": {
		"latitude": 38.80484,
		"longitude": -77.04692
	}
}, {
	"timeStamp": "2017-01-02T12:16:36.000Z",
	"geoLocation": {
		"latitude": 38.80484,
		"longitude": -77.04692
	}
}, {
	"timeStamp": "2017-01-02T12:17:30.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-02T12:40:00.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-02T12:52:48.000Z",
	"geoLocation": {
		"latitude": 38.87918,
		"longitude": -99.32677
	}
}, {
	"timeStamp": "2017-01-02T12:53:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-02T12:58:00.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-02T13:02:36.000Z",
	"geoLocation": {
		"latitude": 41.16704,
		"longitude": -73.20483
	}
}, {
	"timeStamp": "2017-01-02T13:06:30.000Z",
	"geoLocation": {
		"latitude": 35.61266,
		"longitude": -77.36635
	}
}, {
	"timeStamp": "2017-01-02T14:26:18.000Z",
	"geoLocation": {
		"latitude": 37.55376,
		"longitude": -77.46026
	}
}, {
	"timeStamp": "2017-01-02T14:31:48.000Z",
	"geoLocation": {
		"latitude": 42.68313,
		"longitude": -73.77845
	}
}, {
	"timeStamp": "2017-01-02T14:56:12.000Z",
	"geoLocation": {
		"latitude": 40.60843,
		"longitude": -75.49018
	}
}, {
	"timeStamp": "2017-01-02T16:19:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T00:32:54.000Z",
	"geoLocation": {
		"latitude": 40.51868,
		"longitude": -78.39474
	}
}, {
	"timeStamp": "2017-01-03T08:44:00.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-03T08:52:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T09:02:00.000Z",
	"geoLocation": {
		"latitude": 40.3769,
		"longitude": -111.79576
	}
}, {
	"timeStamp": "2017-01-03T09:09:00.000Z",
	"geoLocation": {
		"latitude": 39.36428,
		"longitude": -74.42293
	}
}, {
	"timeStamp": "2017-01-03T10:12:54.000Z"
}, {
	"timeStamp": "2017-01-03T11:06:00.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-03T11:11:24.000Z",
	"geoLocation": {
		"latitude": 39.07955,
		"longitude": -77.07303
	}
}, {
	"timeStamp": "2017-01-03T12:01:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T13:12:36.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T13:12:48.000Z",
	"geoLocation": {
		"latitude": 27.40962,
		"longitude": -80.35483
	}
}, {
	"timeStamp": "2017-01-03T13:45:42.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T14:33:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T15:57:00.000Z",
	"geoLocation": {
		"latitude": 29.42385,
		"longitude": -95.2441
	}
}, {
	"timeStamp": "2017-01-03T16:01:42.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-03T16:06:42.000Z",
	"geoLocation": {
		"latitude": 29.42385,
		"longitude": -95.2441
	}
}, {
	"timeStamp": "2017-01-03T16:18:42.000Z",
	"geoLocation": {
		"latitude": 38.97845,
		"longitude": -76.49218
	}
}, {
	"timeStamp": "2017-01-03T16:34:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-03T17:35:36.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-03T17:56:18.000Z",
	"geoLocation": {
		"latitude": 33.83529,
		"longitude": -117.9145
	}
}, {
	"timeStamp": "2017-01-03T18:12:42.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-03T20:39:36.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-04T00:24:12.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-04T00:26:12.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-04T08:19:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-04T10:00:06.000Z",
	"geoLocation": {
		"latitude": 38.10742,
		"longitude": -122.5697
	}
}, {
	"timeStamp": "2017-01-04T10:56:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-04T11:23:54.000Z",
	"geoLocation": {
		"latitude": 43.24202,
		"longitude": -71.53813
	}
}, {
	"timeStamp": "2017-01-04T12:01:48.000Z",
	"geoLocation": {
		"latitude": 38.80484,
		"longitude": -77.04692
	}
}, {
	"timeStamp": "2017-01-04T12:03:54.000Z",
	"geoLocation": {
		"latitude": 39.08367,
		"longitude": -84.50855
	}
}, {
	"timeStamp": "2017-01-04T12:58:48.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-04T13:10:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-04T13:11:06.000Z",
	"geoLocation": {
		"latitude": 35.20453,
		"longitude": -89.87398
	}
}, {
	"timeStamp": "2017-01-04T13:23:42.000Z",
	"geoLocation": {
		"latitude": 38.97845,
		"longitude": -76.49218
	}
}, {
	"timeStamp": "2017-01-04T14:21:30.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-04T14:22:36.000Z",
	"geoLocation": {
		"latitude": 38.80484,
		"longitude": -77.04692
	}
}, {
	"timeStamp": "2017-01-04T16:03:00.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-04T18:04:36.000Z",
	"geoLocation": {
		"latitude": 38.80484,
		"longitude": -77.04692
	}
}, {
	"timeStamp": "2017-01-04T18:50:36.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-04T18:52:48.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-04T20:40:36.000Z",
	"geoLocation": {
		"latitude": 33.92557,
		"longitude": -116.87641
	}
}, {
	"timeStamp": "2017-01-04T21:30:48.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-05T09:37:00.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-05T09:46:30.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-05T10:05:00.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-05T10:25:00.000Z",
	"geoLocation": {
		"latitude": 40.32757,
		"longitude": -80.0395
	}
}, {
	"timeStamp": "2017-01-05T10:41:54.000Z",
	"geoLocation": {
		"latitude": 38.36843,
		"longitude": -81.69957
	}
}, {
	"timeStamp": "2017-01-05T10:42:48.000Z",
	"geoLocation": {
		"latitude": 38.36843,
		"longitude": -81.69957
	}
}, {
	"timeStamp": "2017-01-05T11:07:42.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-05T12:34:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-05T13:33:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-05T13:37:36.000Z",
	"geoLocation": {
		"latitude": 38.02931,
		"longitude": -78.47668
	}
}, {
	"timeStamp": "2017-01-05T13:37:42.000Z"
}, {
	"timeStamp": "2017-01-05T14:10:48.000Z"
}, {
	"timeStamp": "2017-01-05T14:48:00.000Z"
}, {
	"timeStamp": "2017-01-05T15:05:18.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-05T15:20:30.000Z",
	"geoLocation": {
		"latitude": 42.39593,
		"longitude": -71.17867
	}
}, {
	"timeStamp": "2017-01-05T16:16:54.000Z",
	"geoLocation": {
		"latitude": 35.73265,
		"longitude": -78.85029
	}
}, {
	"timeStamp": "2017-01-05T16:18:36.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-05T16:25:00.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-05T17:19:24.000Z",
	"geoLocation": {
		"latitude": 40.15511,
		"longitude": -74.82877
	}
}, {
	"timeStamp": "2017-01-05T17:34:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-05T17:37:30.000Z",
	"geoLocation": {
		"latitude": 40.71427,
		"longitude": -74.00597
	}
}, {
	"timeStamp": "2017-01-05T17:38:24.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-05T17:47:54.000Z",
	"geoLocation": {
		"latitude": 40.71427,
		"longitude": -74.00597
	}
}, {
	"timeStamp": "2017-01-05T17:58:18.000Z",
	"geoLocation": {
		"latitude": 40.71427,
		"longitude": -74.00597
	}
}, {
	"timeStamp": "2017-01-06T06:00:42.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-06T08:44:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-06T09:17:48.000Z",
	"geoLocation": {
		"latitude": 40.65844,
		"longitude": -74.29959
	}
}, {
	"timeStamp": "2017-01-06T09:53:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-06T09:59:18.000Z",
	"geoLocation": {
		"latitude": 38.20091,
		"longitude": -84.87328
	}
}, {
	"timeStamp": "2017-01-06T10:07:24.000Z",
	"geoLocation": {
		"latitude": 40.2737,
		"longitude": -76.88442
	}
}, {
	"timeStamp": "2017-01-06T12:22:24.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-06T12:30:36.000Z",
	"geoLocation": {
		"latitude": 43.23418,
		"longitude": -86.24839
	}
}, {
	"timeStamp": "2017-01-06T12:35:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-06T12:36:48.000Z",
	"geoLocation": {
		"latitude": 39.07955,
		"longitude": -77.07303
	}
}, {
	"timeStamp": "2017-01-06T13:16:48.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-06T13:19:30.000Z",
	"geoLocation": {
		"latitude": 26.34508,
		"longitude": -80.14671
	}
}, {
	"timeStamp": "2017-01-06T13:23:12.000Z",
	"geoLocation": {
		"latitude": 47.62621,
		"longitude": -122.52124
	}
}, {
	"timeStamp": "2017-01-06T13:31:54.000Z",
	"geoLocation": {
		"latitude": 26.34508,
		"longitude": -80.14671
	}
}, {
	"timeStamp": "2017-01-06T14:18:12.000Z",
	"geoLocation": {
		"latitude": 35.60095,
		"longitude": -82.55402
	}
}, {
	"timeStamp": "2017-01-06T14:26:54.000Z",
	"geoLocation": {
		"latitude": 38.97845,
		"longitude": -76.49218
	}
}, {
	"timeStamp": "2017-01-06T14:30:48.000Z",
	"geoLocation": {
		"latitude": 40.3769,
		"longitude": -111.79576
	}
}, {
	"timeStamp": "2017-01-06T14:49:30.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-06T15:01:42.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-06T15:05:42.000Z",
	"geoLocation": {
		"latitude": 36.81904,
		"longitude": -76.27494
	}
}, {
	"timeStamp": "2017-01-06T15:37:54.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-06T15:47:12.000Z",
	"geoLocation": {
		"latitude": 37.55376,
		"longitude": -77.46026
	}
}, {
	"timeStamp": "2017-01-06T16:41:24.000Z",
	"geoLocation": {
		"latitude": 35.08449,
		"longitude": -106.65114
	}
}, {
	"timeStamp": "2017-01-06T17:50:00.000Z",
	"geoLocation": {
		"latitude": 38.04937,
		"longitude": -122.15858
	}
}, {
	"timeStamp": "2017-01-06T18:34:42.000Z",
	"geoLocation": {
		"latitude": 37.22957,
		"longitude": -80.41394
	}
}, {
	"timeStamp": "2017-01-07T10:05:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-07T10:27:18.000Z",
	"geoLocation": {
		"latitude": 40.65649,
		"longitude": -73.6093
	}
}, {
	"timeStamp": "2017-01-07T11:07:06.000Z",
	"geoLocation": {
		"latitude": 35.22709,
		"longitude": -80.84313
	}
}, {
	"timeStamp": "2017-01-07T12:56:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-07T12:57:36.000Z",
	"geoLocation": {
		"latitude": 38.80484,
		"longitude": -77.04692
	}
}, {
	"timeStamp": "2017-01-07T15:30:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-07T17:35:54.000Z",
	"geoLocation": {
		"latitude": 37.30432,
		"longitude": -77.2872
	}
}, {
	"timeStamp": "2017-01-07T18:44:42.000Z",
	"geoLocation": {
		"latitude": 39.80276,
		"longitude": -105.08748
	}
}];
  res.send(data);
  //res.sendFile(path.join(DATA_DIR, `phoneData${req.params.year}.csv`))
});

app.get('*', function(req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => console.log("Maptivity server listening on port " + PORT));
