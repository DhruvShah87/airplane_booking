const {StatusCodes} = require('http-status-codes')

const infoHandler = (req, res) => {
    //we send a structured response 
    // it is good practice to use enums instead of raw status codes
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "API is live",
        error: {},
        data: {}
    })
}

module.exports = {
    infoHandler
}