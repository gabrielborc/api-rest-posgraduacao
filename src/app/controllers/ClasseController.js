const Controller = require('./Controller');
const Classe = require('./../mocks/Classe');

class ClasseController extends Controller {}

module.exports = new ClasseController(Classe);