const Sequelize = require('sequelize');
const sequelize = require(`${__dirname}/Sequelize.js`);
const Genre = require(`${__dirname}/../Models/Genre`)(sequelize);

async function GetGenres(numberOfGenres) {
   genresArray = [];
   
   await Genre.findAll({
      attributes: [
         // Doesn't actually grab distinct values, fix later.
         [sequelize.fn('DISTINCT', sequelize.col('genre_id')), 'genre_id'],
         'genre_name'
      ],
      order: Sequelize.literal('rand()'), 
      limit: numberOfGenres 
   }).then((genres) => {
      genres.forEach((genre) => { genresArray.push({ genre_id: genre.genre_id, genre_name: genre.genre_name }) });
   }).catch((error) => {
      console.error('Unable to complete GetGenres.js\n', error);
   });
      
   return genresArray;
}

module.exports = GetGenres;