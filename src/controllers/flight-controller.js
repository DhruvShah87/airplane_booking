const { FlightService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { Logger } = require('../config')
const { add } = require('winston')

async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAiportId: req.body.departureAiportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats
        })

        SuccessResponse.data = flight
        SuccessResponse.message = "Successsfully created Flight"

        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {

        console.log(error)
        Logger.error(error)
        ErrorResponse.message = "Not able to create airport"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights
        SuccessResponse.message = "Successsfully fetched Flights"
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch (error) {

        console.log(error)
        Logger.error(error)
        ErrorResponse.message = "Not able to fetch flights"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}
module.exports = {
    createFlight,
    getAllFlights
}