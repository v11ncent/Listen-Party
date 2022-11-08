const sequelize = require(`${__dirname}/Sequelize.js`);

function ConnectToDatabase() {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } 
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = ConnectToDatabase;