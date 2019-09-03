const Utils = require('./../Utils');

class Controller {
    constructor(mock) {
        this._mock = mock;
    }

    get mock() {
        return this._mock;
    }

    find(req, res) {
        let mock = req.mock || this.mock;
        let id = parseInt(req.params.id);
        
        let itemMock = mock.filter((item) => {
            return id === item.id;
        });
        
        if (itemMock.length > 0) {
            itemMock = Utils.filterQuery(req.query, itemMock);
            res.json(itemMock[0]);
        } else { 
            res.status(404).json({});
        }
    }
    
    findAll(req, res) {
        let mock = req.mock || this.mock;
        mock = Utils.filterQuery(req.query, mock);
        
        res.json(Utils.paginate(req.query, mock));
    }

    create(req, res) {
        let mock = {id: Utils.newId(this.mock)};
        res.status(201).json(Object.assign(mock, req.body));
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
            res.status(404).json();
        }
    }
}

module.exports = Controller;