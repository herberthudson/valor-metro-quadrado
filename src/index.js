const express = require('express')
const squareMeterRouter = require('./Routes')

const app = express()
app.use('/', squareMeterRouter)
app.listen(4000, () => {
	console.log(`server running on port 4000`)
})

module.exports = app
