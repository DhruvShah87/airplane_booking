const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const { Logger } = require('../config');
const {AppError} = require('../utils/errors')
const { Op } = require('sequelize');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data);
        return flight;

    } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message)
                })
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(`Can't Create a Flight Object`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function getAllFlights(query){

    try {
       let customFilter = {}
       let sortFilter = []
        const midnight = '23:59:59'
    if(query.trips){
        [departureAiportId, arrivalAirportId] = query.trips.split('-')
        if (!departureAiportId || !arrivalAirportId){
            throw new AppError('Trips parameter is invalid', StatusCodes.BAD_REQUEST)
        }

        if(departureAiportId == arrivalAirportId){
            throw new AppError('Trips parameter is invalid', StatusCodes.BAD_REQUEST)
        }

        customFilter.departureAiportId = departureAiportId
        customFilter.arrivalAirportId = arrivalAirportId



    } 

    if(query.price){
        [minPrice, maxPrice] = query.price.split('-')
        if(isNaN(minPrice) || isNaN(maxPrice)){
            throw new AppError('Price parameter is invalid', StatusCodes.BAD_REQUEST)
        }
        customFilter.price =  {[Op.between]: [minPrice, maxPrice]}
    }

    if(query.travellers){
        if(isNaN(query.travellers)){
            throw new AppError('Travellers parameter is invalid', StatusCodes.BAD_REQUEST)
        }   
        customFilter.totalSeats = {[Op.gte]: parseInt(query.travellers)}
    }

    if(query.date){
       customFilter.departureTime = {[Op.between]:[ query.date, query.date + midnight]}

    }

    if(query.sort){
        const params = query.sort.split(',')
        sortFilter = params.map((param) =>  param.split('_'))
    }
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter)

        return flights
    } catch (error) {
        console.log("--" + error)
         throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
}

async function getFlight(id) {
        try {
            const flight = await flightRepository.get(id);
            return flight
    
        } catch (error) {
                if(error instanceof AppError){
                    throw error
                }
                throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
           
        }
}

async function updateSeats(data){
    try {
        const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec)
        return response
    } catch (error) {
        throw new AppError(`Can't Update Data`, StatusCodes.INTERNAL_SERVER_ERROR)
           
        }
}





module.exports ={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}