const Controller = require('./Controller');
const Cargo = require('./../mocks/Cargo');

class CargoControlle extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new CargoControlle(Cargo);