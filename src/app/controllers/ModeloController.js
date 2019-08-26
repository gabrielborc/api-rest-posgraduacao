const Controller = require('./Controller');
const Modelo = require('./../mocks/Modelo');

class ModeloController extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new ModeloController(Modelo);