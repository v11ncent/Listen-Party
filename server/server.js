const ConnectToDatabase = require(`${__dirname}/Functions/ConnectToDatabase`);
const FetchGenres = require(`${__dirname}/Functions/FetchGenres`);
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;

ConnectToDatabase();

app.use(cors());

app.get('/', async (req, res) => {
    const numberOfGenres = Number(req.query.number_of_genres);
    const genres = await FetchGenres(numberOfGenres);
    res.send(genres);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});