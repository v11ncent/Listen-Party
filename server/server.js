const ConnectToDatabase = require(`${__dirname}/Functions/ConnectToDatabase`);
const GetGenres = require(`${__dirname}/Functions/GetGenres`);
const GetLobbies = require('./Functions/GetLobbies');
const CreateLobby = require(`${__dirname}/Functions/CreateLobby`);
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

ConnectToDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/fetch-genres', async (req, res) => {
    const numberOfGenres = Number(req.query.number_of_genres);

    try {
        const genres = await GetGenres(numberOfGenres);
        res.json(genres);
    }
    catch (error) {
        console.error("Error fetching genres\n", error);
        res.sendStatus(500);
    }
});

app.get('/fetch-lobbies', async (req, res) => {
    const numberOfLobbies = Number(req.query.number_of_lobbies);

    try {
        const lobbies = await GetLobbies(numberOfLobbies);
        res.json(lobbies);
    }
    catch (error) {
        console.error("Error fetching lobbies\n", error);
        res.sendStatus(500);
    }
});

app.post('/create-lobby', async (req, res) => {
    const requestParams = req.body.params;

    try {
        CreateLobby(requestParams.name, requestParams.genres[0].genre_id);
        res.sendStatus(200);
    }
    catch (error) {
        console.error('Error adding lobby to database\n', error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});