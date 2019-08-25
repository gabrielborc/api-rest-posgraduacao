const Router = require('express');

//Controllers
const CargoController = require('./app/controllers/CargoController');

const routes = new Router();

routes.get('/cargos', CargoController.findAll);
routes.get('/cargos/:id', CargoController.find);
routes.post('/cargos', CargoController.create);
routes.put('/cargos', CargoController.update);
routes.delete('/cargos', CargoController.delete);

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = routes;