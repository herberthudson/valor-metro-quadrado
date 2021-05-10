const express = require('express')
const squareMeterRouter = require('./Routes')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SquareMeter API',
			version: '1.0.0',
			description:
				'A simple Express Library API to get square meter value',
		},
		servers: [
			{
				url: 'http://localhost:4000',
			},
		],
	},
	apis: ['./src/Routes/index.js'],
}

const specs = swaggerJsDoc(options)

const app = express()

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/', squareMeterRouter)
app.listen(4000)

module.exports = app
