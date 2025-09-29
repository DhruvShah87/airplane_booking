const { AirportService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { Logger } = require('../config')
const { add } = require('winston')

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address || null,
            cityId: req.body.cityId
        })

        SuccessResponse.data = airport
        SuccessResponse.message = "Successsfully created Airport"

        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {

        console.log(error)
        Logger.error(error)
        ErrorResponse.message = "Not able to create airport"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getAirports(req, res) {
    try {
        const airplane = await AirportService.getAirports()

        SuccessResponse.data = airplane
        SuccessResponse.message = "Successsfully fetched airports"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to fetch airports"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getAirport(req, res) {
    try {
        const id = req.params.id
        const airplane = await AirportService.getAirport(id)

        SuccessResponse.data = airplane
        SuccessResponse.message = "Successsfully fetched airport"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to fetch airplane"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function destroyAirport(req, res) {
    try {
        const id = req.params.id
        const airplane = await AirportService.destroyAirport(id)

        SuccessResponse.data = airplane
        SuccessResponse.message = "Successsfully deleted airport"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to delete airport"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}


module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}