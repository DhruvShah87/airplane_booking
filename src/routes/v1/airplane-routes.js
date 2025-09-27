const express = require('express')
const router = express.Router()

const {AirplaneMiddleware} = require('../../middlewares')
const {AirplaneController} = require('../../controllers')

router.get('/', AirplaneController.getAirplanes )

router.post('/', 
        AirplaneMiddleware.validateCreateRequest , 
        AirplaneController.createAirplane )

router.get('/:id', AirplaneController.getAirplane)
router.delete('/:id', AirplaneController.destroyAirplane)


module.exports = router














