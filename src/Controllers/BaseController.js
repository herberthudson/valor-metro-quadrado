class BaseController {
	async get(req, res) {
		try {
			await this.execute(req, res)
		} catch (err) {
			this.fail(res, 'An unexpected error occurred')
		}
	}

	static jsonResponse(res, code, message) {
		res.status(code).json({ message })
	}

	ok(res, data) {
		if (data) {
			res.type('application/json')
			res.status(200).json(data)
		} else {
			res.sendStatus(200)
		}
	}

	fail(res, error) {
		console.log(error)
		res.status(500).json({
			message: error.toString(),
		})
	}
}

module.exports = BaseController
