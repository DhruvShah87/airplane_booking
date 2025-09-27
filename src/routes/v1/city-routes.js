const express = require('express')
const router = express.Router()

const {CityMiddleware} = require('../../middlewares')
const {CityController} = require('../../controllers')

router.get('/', CityController.getCities )

router.post('/', 
        CityMiddleware.validateCreateRequest , 
        CityController.createCity )

router.get('/:id', CityController.getCity)
router.delete('/:id', CityController.destroyCity)


module.exports = router
