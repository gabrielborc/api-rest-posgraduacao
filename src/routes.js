const Router = require('express');

//Controllers
const FilialController = require('./app/controllers/FilialController');
const CargoController = require('./app/controllers/CargoController');
const FabricanteController = require('./app/controllers/FabricanteController');
const ModeloController = require('./app/controllers/ModeloController');
const ClasseController = require('./app/controllers/ClasseController');
const TanqueController = require('./app/controllers/TanqueController');
const CarroController = require('./app/controllers/CarroController');

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

routes.get('/fabricantes', FabricanteController.findAll.bind(FabricanteController));
routes.get('/fabricantes/:id', FabricanteController.find.bind(FabricanteController));
routes.post('/fabricantes', FabricanteController.create.bind(FabricanteController));
routes.put('/fabricantes/:id', FabricanteController.update.bind(FabricanteController));
routes.delete('/fabricantes/:id', FabricanteController.delete.bind(FabricanteController));

routes.get('/modelos', ModeloController.findAll.bind(ModeloController));
routes.get('/modelos/:id', ModeloController.find.bind(ModeloController));
routes.post('/modelos', ModeloController.create.bind(ModeloController));
routes.put('/modelos/:id', ModeloController.update.bind(ModeloController));
routes.delete('/modelos/:id', ModeloController.delete.bind(ModeloController));

routes.get('/classes', ClasseController.findAll.bind(ClasseController));
routes.get('/classes/:id', ClasseController.find.bind(ClasseController));
routes.post('/classes', ClasseController.create.bind(ClasseController));
routes.put('/classes/:id', ClasseController.update.bind(ClasseController));
routes.delete('/classes/:id', ClasseController.delete.bind(ClasseController));

routes.get('/tanques', TanqueController.findAll.bind(TanqueController));
routes.get('/tanques/:id', TanqueController.find.bind(TanqueController));
routes.post('/tanques', TanqueController.create.bind(TanqueController));
routes.put('/tanques/:id', TanqueController.update.bind(TanqueController));
routes.delete('/tanques/:id', TanqueController.delete.bind(TanqueController));

routes.get('/carros', CarroController.findAll.bind(CarroController));
routes.get('/carros/:id', CarroController.find.bind(CarroController));
routes.post('/carros', CarroController.create.bind(CarroController));
routes.put('/carros/:id', CarroController.update.bind(CarroController));
routes.delete('/carros/:id', CarroController.delete.bind(CarroController));

module.exports = routes;