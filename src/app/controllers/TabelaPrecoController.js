const Controller = require('./Controller');
const TabelaPreco = require('./../mocks/TabelaPreco');
const Utils = require('./../Utils');

class TabelaPrecoController extends Controller {

    find(req, res) {
        req.mock = this.filterChild(req);        
        super.find(req, res);
    }

    findAll(req, res) {
        req.mock = this.filterChild(req);        
        super.findAll(req, res);
    }

    filterChild(req) {
        let { idFilial } = req.params;
        return Utils.filterIn('idFilial_', idFilial, this.mock);
    }

}

module.exports = new TabelaPrecoController(TabelaPreco);