const Controller = require('./Controller');
const Modelo = require('./../mocks/Modelo');

class ModeloController extends Controller {}

module.exports = new ModeloController(Modelo);