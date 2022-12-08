const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Lobby = sequelize.define(
    "Lobby",
    {
      lobby_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      lobby_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Lobby",
      createdAt: "lobby_created_at",
      updatedAt: false,
    }
  );

  return Lobby;
};
