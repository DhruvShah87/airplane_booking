const { CityService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { Logger } = require('../config')

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.city,
        })

        SuccessResponse.data = city
        SuccessResponse.message = "Successsfully created City"

        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to create city"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getCities(req, res) {
    try {
        const city = await CityService.getCities()

        SuccessResponse.data = city
        SuccessResponse.message = "Successsfully fetched airplanes"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to fetch airplanes"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getCity(req, res) {
    try {
        const id = req.params.id
        const city = await CityService.getCity(id)

        SuccessResponse.data = city
        SuccessResponse.message = "Successsfully fetched city"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to fetch city"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function destroyCity(req, res) {
    try {
        const id = req.params.id
        const city = await CityService.destroyCity(id)

        SuccessResponse.data = city
        SuccessResponse.message = "Successsfully deleted city"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to delete city"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}


module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity
}