class Controller {
    constructor(mock={}) {
        this.mock = mock;
    }

    find(req, res) {
        res.send(`GET find - ${req.params.id}`);
    }
    
    findAll(req, res) {
        res.send(`GET findAll`);
    }

    create(req, res) {
        res.send(`POST create`);
    }

    update(req, res) {
        res.send(`PUT update`);
    }

    delete(req, res) {
        res.send(`DELETE delete`);
    }
}

module.exports = Controller;