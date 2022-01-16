const express = require('express');
const https = require('https');
const app = express();

app.get('/data/:location', (req, res) => {

    https.get(`https://www.metaweather.com/api/location/${req.params.location}/`, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
            res.send(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        res.send({});
    });
});

app.listen(4000);
