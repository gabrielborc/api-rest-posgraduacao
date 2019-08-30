const Controller = require('./Controller');
const AluguelDevolucao = require('./../mocks/AluguelDevolucao');
const Utils = require('./../Utils');

class AluguelDevolucaoController extends Controller {

    find(req, res) {
        req.mock = this.filterChild(req);        
        super.find(req, res);
    }

    findAll(req, res) {
        req.mock = this.filterChild(req);        
        super.findAll(req, res);
    }

    create(req, res) {
        let { idAluguel } = req.params;

        if (this.checkAluguel(idAluguel)) {
            res.status(201).json(Object.assign({idAluguel: parseInt(idAluguel)}, req.body));
        } else {
            res.status(404).json();
        }
    }

    update(req, res) {
        let { idAluguel } = req.params;

        if (this.checkAluguel(idAluguel)) {
            res.json(Object.assign({idAluguel: parseInt(idAluguel)}, req.body));
        } else {
            res.status(404).json();
        }      
    }

    delete(req, res) {
        let { idAluguel } = req.params;

        if (this.checkAluguel(idAluguel)) {
            res.status(204).json();
        } else {
            res.status(404).json();
        }
    }

    filterChild(req) {
        let { idAluguel } = req.params;
        return Utils.filterIn('idAluguel_', idAluguel, this.mock);
    }

    checkAluguel(idAluguel) {
        let aluguel = Utils.filterIn('idAluguel_', idAluguel, AluguelDevolucao);
        return aluguel.length === 0 ? false : true; 
    }

}

module.exports = new AluguelDevolucaoController(AluguelDevolucao);