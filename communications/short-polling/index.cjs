const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

let data = 'Initial Data'

app.get("/get-data", (_, res) => {
    console
    res.send({
        data
    })
})

app.get("/set-data", (req, res) => {
    const paramData = req?.query?.data;
    data = paramData
    res.send({
        data
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on a port ${port}`)
})