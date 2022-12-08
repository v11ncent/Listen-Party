const Sequelize = require("sequelize");
const sequelize = require("./Sequelize.js");
const Lobby = require("../Models/Lobby")(sequelize);
const GetGenreFromId = require("./GetGenreFromId");

async function GetLobbies(numberOfLobbies) {
  let lobbyArray = [];
  const lobbies = await Lobby.findAll({ limit: numberOfLobbies });

  for (let i = 0; i < lobbies.length; i++) {
    lobbyArray.push(await lobbyHandler(lobbies[i]));
  }

  return lobbyArray;
}

const lobbyHandler = async (lobby) => {
  const genreObject = await GetGenreFromId(lobby.genre_id);

  return {
    lobby_id: lobby.lobby_id,
    lobby_name: lobby.lobby_name,
    lobby_genre: genreObject,
  };
};

module.exports = GetLobbies;
