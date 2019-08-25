const Router = require('express');

//Controllers
const FilialController = require('./app/controllers/FilialController');
const CargoController = require('./app/controllers/CargoController');

const routes = new Router();

routes.get('/filiais', FilialController.findAll.bind(FilialController));
routes.get('/filiais/:id', FilialController.find.bind(FilialController));
routes.post('/filiais', FilialController.create.bind(FilialController));
routes.put('/filiais/:id', FilialController.update.bind(FilialController));
routes.delete('/filiais/:id', FilialController.delete.bind(FilialController));

routes.get('/cargos', CargoController.findAll.bind(CargoController));
routes.get('/cargos/:id', CargoController.find.bind(CargoController));
routes.post('/cargos', CargoController.create.bind(CargoController));
routes.put('/cargos/:id', CargoController.update.bind(CargoController));
routes.delete('/cargos/:id', CargoController.delete.bind(CargoController));

module.exports = routes;