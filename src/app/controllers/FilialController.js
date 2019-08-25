const Controller = require('./Controller');
const Filial = require('./../mocks/Filial');

class FilialControlle extends Controller {
    constructor(mock) {
        super(mock);
    }
}

module.exports = new FilialControlle(Filial);