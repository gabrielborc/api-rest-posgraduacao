const Controller = require('./Controller');
const ClienteTelefone = require('./../mocks/ClienteTelefone');
const Utils = require('./../Utils');

class ClienteTelefoneController extends Controller {

    find(req, res) {
        req.mock = this.filterChild(req);        
        super.find(req, res);
    }

    findAll(req, res) {
        req.mock = this.filterChild(req);        
        super.findAll(req, res);
    }

    filterChild(req) {
        let { idCliente } = req.params;
        return Utils.filterIn('idCliente_', idCliente, this.mock);
    }
    
}

module.exports = new ClienteTelefoneController(ClienteTelefone);