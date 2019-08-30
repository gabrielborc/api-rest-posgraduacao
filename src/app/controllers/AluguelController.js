const Controller = require('./Controller');
const Aluguel = require('./../mocks/Aluguel');

class AluguelController extends Controller {}

module.exports = new AluguelController(Aluguel);