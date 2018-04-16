const path = require('path');
const express = require('express');
const http = require("http");
const socketIo = require("socket.io");
const csv = require('csv');
const data = require('./data_conversions_helpers.js');

const DIST_DIR = path.join(__dirname, 'public/');
const PORT = 3000;

const app = express();
app.use(express.static(DIST_DIR));

const server = http.createServer(app);

//wire up ExpressJS server to Socket.IO
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("Connected to client and here is phone data: " + JSON.stringify(data.phoneData)), setInterval(
    () => socket.emit('testEvent', "Message from server sent"),
    5000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

server.listen(PORT, () => console.log("Maptivity server listening on port " + PORT));
