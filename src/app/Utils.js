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

    filterFields(fields, mock) {
        let newMock = [];

        mock.forEach(function(item) {
            let newObject = {};

            fields.split(',').forEach(function(field) {               
                if (item.hasOwnProperty(field)) {
                    newObject[field] = item[field];
                }                                    
            });   

            newMock.push(newObject);
        }); 
        
        return newMock;
    }

    filterQuery(params, mock) {
        if (params.hasOwnProperty('fields')) {
            mock = this.filterFields(params.fields, mock);
        }

        return mock;
    }
    
}

module.exports = new Utils();