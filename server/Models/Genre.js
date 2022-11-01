const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Genre = sequelize.define('Genre', {
        genre_id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        genre_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        
     }, {
        tableName: 'Genre',
        timestamp: false
    });
    
    return Genre;
}