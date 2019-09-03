const Controller = require('./Controller');
const Usuario = require('./../mocks/Usuario');
const md5 = require('md5');

class UsuarioController extends Controller {

    create(req, res) {
        req.body = this.hashPassword(req.body);
        super.create(req, res);
    }

    update(req, res) {
        req.body = this.hashPassword(req.body);
        super.update(req, res);
    }

    hashPassword(usuario) {
        if (usuario.hasOwnProperty('senha')) {
            usuario.senha = md5(usuario.senha);
        }

        return usuario;
    }

}

module.exports = new UsuarioController(Usuario);