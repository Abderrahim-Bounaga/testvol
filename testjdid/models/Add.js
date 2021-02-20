const Sequelize = require('sequelize');
const sequelizeDb = require('../bin/database');

const Add = sequelizeDb.define('add', {
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
  
Add.sync()

module.exports = Add;