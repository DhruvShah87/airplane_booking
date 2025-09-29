const CrudRepository = require('./crud-repositories')
const {flight} = require('../models')

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(flight)
    }

    async getAllFlights(filter){
        const response = await flight.findAll({
            where: filter
        })
        return response
    }
}

module.exports = AirplaneRepository 