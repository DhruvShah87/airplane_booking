const { AirplaneService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { Logger } = require('../config')

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })

        SuccessResponse.data = airplane
        SuccessResponse.message = "Successsfully created Airplane"

        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to create airplane"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getAirplanes(req, res) {
    try {
        const airplane = await AirplaneService.getAirplanes ()

        SuccessResponse.data = airplane
        SuccessResponse.message = "Successsfully fetched airplanes"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to fetch airplanes"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}


module.exports = {
    createAirplane,
    getAirplanes
}