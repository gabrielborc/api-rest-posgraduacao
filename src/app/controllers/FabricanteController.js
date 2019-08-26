const Controller = require('./Controller');
const Fabricante = require('./../mocks/Fabricante');

class FabricanteControlle extends Controller {}

module.exports = new FabricanteControlle(Fabricante);