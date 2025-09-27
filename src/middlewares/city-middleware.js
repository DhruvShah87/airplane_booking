const { StatusCodes } = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

function validateCreateRequest(req, res, next) {
    if(!req.body || !req.body.city){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error = "City not receieved in expected format"

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
        next()
}

module.exports = {
    validateCreateRequest
}