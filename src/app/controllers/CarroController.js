const Controller = require('./Controller');
const Carro = require('./../mocks/Carro');

class CarroController extends Controller {}

module.exports = new CarroController(Carro);