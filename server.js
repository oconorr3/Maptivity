const path = require('path');
const express = require('express');
const app = express();


const DIST_DIR = path.join(__dirname, 'public/');
const DATA_DIR = path.join(__dirname, 'data/');
const PORT = 3000;

//create log file for cpu usage
///require('./CpuProfiler').init(DATA_DIR);

app.use(express.static(DIST_DIR));

app.get('/data/:year', function(req, res) {
  res.sendFile(path.join(DATA_DIR, `${req.params.year}Data.json`))
});

app.get('*', function(req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => console.log("Maptivity server listening on port " + PORT));
