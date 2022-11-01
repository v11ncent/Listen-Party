require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');
const db_ip = process.env.CONNECTION_IP;
const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db_name, db_username, db_password, {
    host: db_ip,
    dialect: 'mysql'
});

const User = require(`${__dirname}/Models/User`)(sequelize);
const Genre = require(`${__dirname}/Models/Genre`)(sequelize);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} 
catch (error) {
    console.error('Unable to connect to the database:', error);
}