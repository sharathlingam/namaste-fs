const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

// app.use()

app.post('/webhook', ((_req, res) => {

    const payload = res.body;

    console.log("Received payload from the webhook:\n", payload);

    res.status(200).send("Webhook received successfully!")

}))



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

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