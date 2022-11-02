const sequelize = require(`${__dirname}/Sequelize.js`);
const Genre = require(`${__dirname}/../Models/Genre`)(sequelize);

async function FetchGenres() {
    genresArray = [];

    await Genre.findAll()
         .then((genres) => {
            genres.forEach((genre) => genresArray.push(genre.genre_name));
         }).catch((error) => {
            console.error(`Unable to complete ${__filename}:`, error);
         });

    return genresArray;
}

module.exports = FetchGenres;