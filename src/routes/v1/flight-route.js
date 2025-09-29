const express = require('express')
const router = express.Router()

const {FlightMiddleware} = require('../../middlewares')
const {FlightController} = require('../../controllers')

router.post('/', 
        FlightMiddleware.validateCreateRequest , 
        FlightController.createFlight )

router.get('/', FlightController.getAllFlights )

module.exports = router
