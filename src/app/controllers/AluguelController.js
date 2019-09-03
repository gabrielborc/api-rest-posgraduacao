const Controller = require('./Controller');
const Aluguel = require('./../mocks/Aluguel');

class AluguelController extends Controller {

    create(req, res) {
        req.body.valor = 350;
        super.create(req, res);
    }

    update(req, res) {
        req.body.valor = 350;
        super.update(req, res);
    }

}

module.exports = new AluguelController(Aluguel);