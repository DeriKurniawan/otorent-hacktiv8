'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    name: DataTypes.STRING,
    manufacture: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Car.belongsTo(models.Category, {foreignKey: 'category_id'})
        Car.hasOne(models.Transaction, {foreignKey: 'car_id'})
      }
    }
  });
  return Car;
};
