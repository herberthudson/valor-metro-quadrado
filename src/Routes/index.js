const SquareMeterController = require('../Controllers/SquareMeterController')
const { Router } = require('express')
const SquareMeterModel = require('../Models/SquareMeterModel')

const squareMeterRouter = Router()
const squareMeterController = new SquareMeterController(SquareMeterModel)

squareMeterRouter.get('/', (req, res) => squareMeterController.get(req, res))

module.exports = squareMeterRouter
