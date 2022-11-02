const ConnectToServer = require(`${__dirname}/Functions/ConnectToServer`);
const FetchGenres = require(`${__dirname}/Functions/FetchGenres`);

const express = require('express');
const app = express();
const port = 8000;

ConnectToServer();

app.get('/', async (req, res) => {
    const genres = await FetchGenres();
    res.send(genres);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});