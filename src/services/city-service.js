const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const { Logger } = require('../config');
const {AppError} = require('../utils/errors')

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;

    } catch (error) {
            if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message)
                })
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(`Can't Create a City Object`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function getCities(){
    try {
        const cities = await cityRepository.getAll();
        return cities;

    } catch (error) {
            throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function getCity(id){
    try {
        const city = await cityRepository.get(id);
        return city;

    } catch (error) {
            if(error instanceof AppError){
                throw error
            }
            throw new AppError(`Can't Fetch Data`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

async function destroyCity(id){
    try {
        const response = await cityRepository.destroy(id);
        return response;

    } catch (error) {
            if(error instanceof AppError){
                throw error
            }
            throw new AppError(`Can't Delete City`, StatusCodes.INTERNAL_SERVER_ERROR)
       
    }
}

module.exports ={
    createCity,
    getCities,
    getCity,
    destroyCity
}