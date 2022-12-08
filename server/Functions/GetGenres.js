const sequelize = require(`${__dirname}/Sequelize.js`);
const Genre = require(`${__dirname}/../Models/Genre`)(sequelize);

async function GetGenres(numberOfGenres) {
  const res = await Genre.findAll({ limit: numberOfGenres });
  return res.map((genre) => genreHandler(genre));
}

const genreHandler = (genre) => {
  return {
    genre_id: genre.genre_id,
    genre_name: genre.genre_name,
    genre_type: genre.genre_type,
  };
};

module.exports = GetGenres;

// attributes: [
//    // Doesn't actually grab distinct values, fix later.
//    [sequelize.fn('DISTINCT', sequelize.col('genre_id')), 'genre_id'],
//    'genre_name'
// ],
// order: Sequelize.literal('rand()'),
