const express = require('express');
const http = require('http');

const app = express();
const clientPath = `../client`;

app.use(express.static(clientPath));

const server = http.createServer(app);

let port = 8080;

server.listen(8080, () =>{
    console.log("server running on "+port);
});

const io = require('socket.io')(server);

let counter = 0;
io.on('connection', (socket) => {

    counter++;
    console.log(counter+' someone connected');
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });
});



