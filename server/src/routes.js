const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {
  app.get('/coffees', CoffeeController.index)
  app.post('/coffee', CoffeeController.create)
  app.get('/coffee/:coffeeId', CoffeeController.show)
  app.put('/coffee/:coffeeId', CoffeeController.put)
  app.delete('/coffee/:coffeeId', CoffeeController.remove)
}