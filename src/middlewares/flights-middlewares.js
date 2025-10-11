const { StatusCodes } = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

function validateCreateRequest(req, res, next) {
    if( !req.body.flightNumber){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Flight Number not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

        if( !req.body.airplaneId){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Airplane ID not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

        if( !req.body.departureAiportId){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Depature Airport ID not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)

        
    }
    if( !req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Arrival Airport ID not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

        if( !req.body.arrivalTime){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Arrival Time not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    
        if( !req.body.departureTime){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Departure Time not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if( !req.body.price){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Price not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if( !req.body.totalSeats){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Total Seats not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
        next()
}

function validateUpdateSeatsRequest(req, res, next) {
    if( !req.params.id){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Flight ID not receieved in expected format"
    }

    if( !req.body.seats){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "Seats not receieved in expected format"
    }

    next()
}
module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}