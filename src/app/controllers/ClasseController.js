const Controller = require('./Controller');
const Classe = require('./../mocks/Classe');

class ClasseController extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new ClasseController(Classe);