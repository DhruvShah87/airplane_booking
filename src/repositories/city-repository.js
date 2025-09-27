const CrudRepository = require('./crud-repositories')
const {city} = require('../models')

class CityRepository extends CrudRepository{
    constructor(){
        super(city)
    }
}

module.exports = CityRepository 