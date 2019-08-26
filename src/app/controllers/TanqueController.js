const Controller = require('./Controller');
const Tanque = require('./../mocks/Tanque');

class TanqueController extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new TanqueController(Tanque);