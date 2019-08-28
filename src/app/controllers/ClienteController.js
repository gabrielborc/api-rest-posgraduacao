const Controller = require('./Controller');
const Cliente = require('./../mocks/Cliente');

class ClienteController extends Controller {}

module.exports = new ClienteController(Cliente);