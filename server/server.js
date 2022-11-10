const ConnectToDatabase = require(`${__dirname}/Functions/ConnectToDatabase`);
const GetGenres = require(`${__dirname}/Functions/GetGenres`);
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

app.get('/', async (req, res) => {
    const numberOfGenres = Number(req.query.number_of_genres);

    try {
        const genres = await GetGenres(numberOfGenres);
        res.send(genres);
    }
    catch (error) {
        console.error("ERROR FETCHING GENRES\n", error);
        res.sendStatus(500);
    }
});

app.post('/create', async (req, res) => {
    const requestParams = req.body.params;

    try {
        CreateLobby(requestParams.name, requestParams.genres[0]);
        res.sendStatus(200);
    }
    catch (error) {
        console.error('ERROR ADDING LOBBY TO DATABASE\n', error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});