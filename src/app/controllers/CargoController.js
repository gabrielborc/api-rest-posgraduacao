const Controller = require('./Controller');
const Cargo = require('./../mocks/Cargo');

class CargoController extends Controller {}

module.exports = new CargoController(Cargo);