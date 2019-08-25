const Utils = require('./../Utils');

class Controller {
    constructor(mock) {
        this._mock = mock;
    }

    get mock() {
        return this._mock;
    }

    find(req, res) {
        let id = parseInt(req.params.id);

        let itemMock = this.mock.filter((item) => {
            return id === item.id;
        });
        
        if (itemMock.length > 0) {
            res.json(itemMock[0]);
        } else { 
            res.status(404).json({});
        }
    }
    
    findAll(req, res) {
        res.json(this.mock);
    }

    create(req, res) {
        let cargo = {id: Utils.newId(this.mock)};
        res.status(201).json(Object.assign(cargo, req.body));
    }

    update(req, res) {
        let id = req.params.id;

        if (id <= Utils.lastId(this.mock)) {
            let cargo = {id: id};
            res.json(Object.assign(cargo, req.body));
        } else {
            res.status(404).json({});
        }        
    }

    delete(req, res) {
        let id = req.params.id;

        if (id <= Utils.lastId(this.mock)) {
            res.status(204).json();
        } else {
            res.status(404).json({});
        }
    }
}

module.exports = Controller;