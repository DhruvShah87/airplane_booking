const express = require('express')
const router = express.Router()

const {AirportMiddleware} = require('../../middlewares')
const {AirportController} = require('../../controllers')

router.get('/', AirportController.getAirports )

router.post('/', 
        AirportMiddleware.validateCreateRequest , 
        AirportController.createAirport )

router.get('/:id', AirportController.getAirport)
router.delete('/:id', AirportController.destroyAirport)


module.exports = router
