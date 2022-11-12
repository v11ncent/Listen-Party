const Sequelize = require('sequelize');
const sequelize = require(`${__dirname}/Sequelize.js`);
const Lobby = require(`${__dirname}/../Models/Lobby`)(sequelize);

async function GetLobbies(numberOfLobbies) {
   lobbiesArray = [];
   
   await Lobby.findAll({
      order: Sequelize.literal('rand()'), 
      limit: numberOfLobbies
   }).then((lobby) => {
      lobby.forEach((lobby) => { lobbiesArray.push({ lobby_id: lobby.lobby_id, lobby_name: lobby.lobby_name }) });
   }).catch((error) => {
      console.error('Unable to complete GetLobbies.js\n', error);
   });
      
   return lobbiesArray;
}

module.exports = GetLobbies;