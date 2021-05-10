const SquareMeterController = require('../Controllers/SquareMeterController')
const { Router } = require('express')
const SquareMeterModel = require('../Models/SquareMeterModel')

const squareMeterRouter = Router()
const squareMeterController = new SquareMeterController(SquareMeterModel)
/**
 * @swagger
 * components:
 *   schemas:
 *     SquareMeter:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         value:
 *           type: string
 *           description: square meter value
 *       example:
 *         value: 10000
 */

/**
 * @swagger
 * tags:
 *   name: SquareMeter
 *   description: The SquareMeter managing API
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns square meter value
 *     tags: [SquareMeter]
 *     responses:
 *       200:
 *         description: The square meter object with value
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 value: 10000
 *               items:
 *                 $ref: '#/components/schemas/SquareMeter'
 */
squareMeterRouter.get('/', (req, res) => squareMeterController.get(req, res))

module.exports = squareMeterRouter
