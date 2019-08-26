const Controller = require('./Controller');
const Carro = require('./../mocks/Carro');

class CarroController extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new CarroController(Carro);