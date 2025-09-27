const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositories');
const { Logger } = require('../config');
const {AppError} = require('../utils/errors')

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;

    } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message)
                })
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(`Can't Create a Airport Object`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function getAirports(){
    try {
        const airports = await airportRepository.getAll();
        return airports;

    } catch (error) {
            throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;

    } catch (error) {
            if(error instanceof AppError){
                throw error
            }
            throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function destroyAirport(id){
    try {
        const response = await airportRepository.destroy(id);
        return response;

    } catch (error) {
            if(error instanceof AppError){
                throw error
            }
            throw new AppError(`Can't Delete Airport`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

module.exports ={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}