const Sequelize = require('sequelize');
const sequelizeDb = require('../bin/database');

const User = sequelizeDb.define('users', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.INTEGER,
    }
  });
  
User.sync()

module.exports = User;