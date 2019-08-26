const Controller = require('./Controller');
const Tanque = require('./../mocks/Tanque');

class TanqueController extends Controller {}

module.exports = new TanqueController(Tanque);