const express = require('express')

const app = express()
app.use('/', (req, res) => {
	res.send('Hello world')
})
app.listen(4000, () => {
	console.log(`server running on port 4000`)
})

module.exports = app
