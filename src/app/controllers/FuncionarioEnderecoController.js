const Controller = require('./Controller');
const FuncionarioEndereco = require('./../mocks/FuncionarioEndereco');
const Utils = require('./../Utils');

class FuncionarioEnderecoController extends Controller {

    find(req, res) {
        req.mock = this.filterChild(req);        
        super.find(req, res);
    }

    findAll(req, res) {
        req.mock = this.filterChild(req);        
        super.findAll(req, res);
    }

    filterChild(req) {
        let { idFuncionario } = req.params;
        return Utils.filterIn('idFuncionario_', idFuncionario, this.mock);
    }

}

module.exports = new FuncionarioEnderecoController(FuncionarioEndereco);