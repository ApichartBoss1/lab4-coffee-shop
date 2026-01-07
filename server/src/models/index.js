const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const config = require('../config/config').db.options
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.storage,
  logging: config.logging
})

const db = {}

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
