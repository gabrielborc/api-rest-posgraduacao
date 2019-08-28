const Controller = require('./Controller');
const Funcionario = require('./../mocks/Funcionario');

class FuncionarioController extends Controller {}

module.exports = new FuncionarioController(Funcionario);