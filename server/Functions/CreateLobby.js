const Sequelize = require('sequelize');
const sequelize = require(`${__dirname}/Sequelize.js`);
const Lobby = require(`${__dirname}/../Models/Lobby`)(sequelize);

async function CreateLobby(lobby_name, genre_id) {
   await Lobby.create({ lobby_name: lobby_name, genre_id: genre_id });
}

module.exports = CreateLobby;