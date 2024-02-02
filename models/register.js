'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here if needed
    }
  }

  Register.init(
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      coursecompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Register',
    }
  );

  return Register;
};
