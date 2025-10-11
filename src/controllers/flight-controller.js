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

async function getFlight(req, res) {
    try {
        const id = req.params.id
        const flight = await FlightService.getFlight(id)

        SuccessResponse.data = flight
        SuccessResponse.message = "Successsfully fetched flight"

        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {

        Logger.error(error)
        ErrorResponse.message = "Not able to fetch flight"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function updateSeats(req, res){
    try {
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
        })
        SuccessResponse.data = response
        SuccessResponse.message = "Successfully updated the seats"
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        Logger.error(error)
        ErrorResponse.message = "Not able to fetch flight"
        ErrorResponse.error = error

        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}