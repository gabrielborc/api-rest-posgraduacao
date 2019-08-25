class Utils {

    newId(mock) {
        let newId = 0;

        mock.map((item) => { 
            if (item.id > newId) {
                newId = item.id;
            }
        });

        return ++newId;
    }

    lastId(mock) {
       let id = this.newId(mock);
      return --id; 
    }
    
}

module.exports = new Utils();