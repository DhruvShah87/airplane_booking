const CrudRepository = require('./crud-repositories')
const {flight, Airplane, airport, city, db } = require('../models')
const {Sequelize} = require('sequelize')
const {addRowLockOnFlights} = require('./queries')

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(flight)
    }

    async getAllFlights(filter, sort){
        const response = await flight.findAll({
            where: filter,
            order: sort,
            include:[{
                model: Airplane,
                required: true,
            } ,
            {
                model: airport,
                required: true,
                as: 'departureAirport',
                on: {
                    col1: Sequelize.where(Sequelize.col("flight.departureAiportId"), "=", Sequelize.col("depatureAirport.code"))
                },
                include: {
                    model: city,
                    required: true
                }
                
            },
            {
                model: airport,
                required: true,
                as: 'arrivalAirport',
                on: {
                    col1: Sequelize.where(Sequelize.col("flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                },
                
            }          
        ]
        })
        return response
    }

    async updateRemainingSeats(flightId, seats, dec = true){
        await db.query(addRowLockOnFlights(flightId))
        const flight = await this.model.findByPk(flightId)

        if(!flight){
            throw new Error('No flight found')
        }
        if(parseInt(dec)){
            await flight.decrement('totalSeats', { by: seats})
                    }else{
         await flight.increment('totalSeats', { by: seats})
          
        }

        await flight.save()
        return flight 
    }
}

module.exports = AirplaneRepository 