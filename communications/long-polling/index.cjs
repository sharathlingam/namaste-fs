// const express = require('express');
// const app = express();

// app.get('/', (_, res) => {
//     res.sendFile(`${__dirname}/index.html`);
// })

// let data = 'Initial Data'
// const waitingClientsList = [];

// app.get("/get-data", (req, res) => {
//     if (data !== req.query.lastData) {
//         res.json({ data })
//     } else {
//         waitingClientsList.push(res);
//     }
// })

// app.get("/set-data", (req, _) => {
//     data = req?.query?.data;

//     while (waitingClientsList.length > 0) {
//         const client = waitingClientsList.pop();
//         client.json({ data })
//     }
// })

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server is running on a port ${port}`)
// })

const express = require('express');
const app = express();

let data = 'Initial Data';

const waitingClients = [];

app.get('/', (_req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/get-data', (req, res) => {
    if (data !== req.query.lastData) {
        res.json({ data });
    } else {
        waitingClients.push(res);
    }
});

// Use post/put to update
app.get('/set-data', (req, res) => {
    data = req.query.data;

    while (waitingClients.length > 0) {
        const client = waitingClients.pop();
        client.json({ data });
    }

    res.send({ success: 'Data updated successfully' })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});