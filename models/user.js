'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {type:DataTypes.STRING,allowNull:false,
      validate: {
      notEmpty: true,
      notIn: [["Demo", "Trial"]],
      len: {
        args: [1, 10],
        msg: "Password must be between 2 to 16", //custom message
      },
    }},
    password: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};