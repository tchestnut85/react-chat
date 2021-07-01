const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3001;

// Create a server by passing in the express app to use Socket.io
const server = http.createServer(app);
const io = socketio(server);

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set client/build folder in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Run on connection
io.on('connection', socket => {
	console.log('New WebSocket connection');
});

server.listen(PORT, () => console.log(`\nServer running on ${PORT}`));
