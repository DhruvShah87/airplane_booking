const express = require('express')
const router = express.Router()
const {infoController} = require('../../controllers')

router.get('/info', infoController.infoHandler)

module.exports = router