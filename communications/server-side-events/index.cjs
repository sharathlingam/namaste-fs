const express = require('express');
const { createServer } = require("node:http");

const app = express();
const server = createServer(app);


app.get("/", (_req, res) => res.sendFile(`${__dirname}/index.html`));


app.get("/sse", (_req, res) => {

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write("data: Welcome to the Server Sent Event Chapter\n\n");

    const interval = setInterval(() => {
        res.write(`data: Writing Server Time ${new Date().toLocaleString()}\n\n`);
    }, 5000)

    res.on("close", () => {
        clearInterval(interval);
    })

});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
