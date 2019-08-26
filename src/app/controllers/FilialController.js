const Controller = require('./Controller');
const Filial = require('./../mocks/Filial');

class FilialControlle extends Controller {}

module.exports = new FilialControlle(Filial);