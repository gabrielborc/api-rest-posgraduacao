const Controller = require('./Controller');
const Cargo = require('./../mocks/Cargo');

class CargoControlle extends Controller {}

module.exports = new CargoControlle(Cargo);