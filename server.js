const path = require('path');
const express = require('express');
const app = express();

const DIST_DIR = path.join(__dirname, 'public/');
const DATA_DIR = path.join(__dirname, 'data/');
const PORT = 3000;

app.use(express.static(DIST_DIR));

app.get('/data/:year', function(req, res) {
  let data = [
    {
      "latitude": "28.014067",
      "longitude": "-81.728676"
    }, {
      "latitude": "40.750793",
      "longitude": "-73.989525",
      "magnitude": 3
    }
  ];
  res.send(data);
  //res.sendFile(path.join(DATA_DIR, `phoneData${req.params.year}.csv`))
});

app.get('*', function(req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => console.log("Maptivity server listening on port " + PORT));
