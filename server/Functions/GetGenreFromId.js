const sequelize = require(`${__dirname}/Sequelize.js`);
const Genre = require(`${__dirname}/../Models/Genre`)(sequelize);

async function GetGenreFromId(genreId) {
  const genre = await Genre.findOne({ where: { genre_id: genreId } });
  return genreHandler(genre);
}

// Used in GetGenres.js too; refactor later
const genreHandler = (genre) => {
  return {
    genre_id: genre.genre_id,
    genre_name: genre.genre_name,
    genre_type: genre.genre_type,
  };
};

module.exports = GetGenreFromId;
