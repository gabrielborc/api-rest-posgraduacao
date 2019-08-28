const Controller = require('./Controller');
const FuncionarioTelefone = require('./../mocks/FuncionarioTelefone');
const Utils = require('./../Utils');

class FuncionarioTelefoneController extends Controller {

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

module.exports = new FuncionarioTelefoneController(FuncionarioTelefone);