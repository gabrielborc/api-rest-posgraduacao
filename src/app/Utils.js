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

    filterContains(field, value, mock) {
        let regex = new RegExp(value, 'i');
        field = field.split('_')[0];

        return mock.filter((item) => regex.test(item[field]));
    }

    filterIn(field, values, mock) {
        field = field.split('_')[0];
        values = values.split(',');

        return mock.filter((item) => values.indexOf('' + item[field]) !== -1);        
    }

    filterQuery(params, mock) {
        let that = this;

        Object.keys(params).forEach((param) => {
            if (/_contains/.test(param)) {
                mock = that.filterContains(param, params[param], mock);
            } else if (/_in/.test(param)) {
                mock = that.filterIn(param, params[param], mock);
            }
        });

        if (params.hasOwnProperty('fields')) {
            mock = this.filterFields(params.fields, mock);
        }

        return mock;
    }
    
}

module.exports = new Utils();