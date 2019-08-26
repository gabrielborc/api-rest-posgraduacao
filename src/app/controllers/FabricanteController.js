const Controller = require('./Controller');
const Fabricante = require('./../mocks/Fabricante');

class FabricanteControlle extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new FabricanteControlle(Fabricante);