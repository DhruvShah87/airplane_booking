const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const { Logger } = require('../config');
const {AppError} = require('../utils/errors')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;

    } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message)
                })
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(`Can't Create a Aiplane Object`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;

    } catch (error) {
            throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

module.exports ={
    createAirplane,
    getAirplanes
}