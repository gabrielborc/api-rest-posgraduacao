const Router = require('express');

//Controllers
const CargoController = require('./app/controllers/CargoController');

const routes = new Router();

routes.get('/cargos', CargoController.findAll.bind(CargoController));
routes.get('/cargos/:id', CargoController.find.bind(CargoController));
routes.post('/cargos', CargoController.create.bind(CargoController));
routes.put('/cargos/:id', CargoController.update.bind(CargoController));
routes.delete('/cargos/:id', CargoController.delete.bind(CargoController));

module.exports = routes;