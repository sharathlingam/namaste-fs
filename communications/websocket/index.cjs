const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require("node:http");

const app = express();
const server = createServer(app);
const io = new Server(server);


app.get("/", (_req, res) => res.sendFile(`${__dirname}/index.html`));

io.on('connection', (socket) => {
    console.log("Socket created successfully", socket.id);

    socket.on('chat message', (msg) => {
        console.log(msg);
        io.emit('chat message', msg);
    })

    socket.on('remove connection', () => {
        console.log('User disconnected!');
        io.emit('remove connection', "Chat disconnected Successfully")
        socket.disconnect();
    })

})



const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, 'index.html'));
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// server.listen(3000, () => {
//     console.log('server running at http://localhost:3000');
// });