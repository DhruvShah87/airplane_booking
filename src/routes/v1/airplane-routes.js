const express = require('express')
const router = express.Router()

const {AirplaneMiddleware} = require('../../middlewares')
const {AirplaneController} = require('../../controllers')

router.get('/', AirplaneController.getAirplanes )

router.post('/', 
        AirplaneMiddleware.validateCreateRequest , 
        AirplaneController.createAirplane )

module.exports = router














