const Controller = require('./Controller');
const ClienteEndereco = require('./../mocks/ClienteEndereco');
const Utils = require('./../Utils');

class ClienteEnderecoController extends Controller {

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

module.exports = new ClienteEnderecoController(ClienteEndereco);