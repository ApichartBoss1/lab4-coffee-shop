const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const db = require('./models')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

db.sequelize.sync({ force: false }).then(() => {
  app.listen(config.port, () => {
    console.log('CoffeeShop Server running on port ' + config.port)
  })
})
