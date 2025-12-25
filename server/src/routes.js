
const DrinkController = require('./controllers/DrinkController')

module.exports = (app) => {
    app.get('/drinks', DrinkController.index)
    app.get('/drink/:id', DrinkController.show)
    app.post('/drink', DrinkController.create)
    app.put('/drink/:id', DrinkController.update)
    app.delete('/drink/:id', DrinkController.delete)
}



