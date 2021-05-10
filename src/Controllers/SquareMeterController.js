const BaseController = require('./BaseController')
class SquareMeterController extends BaseController {
	constructor(_dataBase) {
		super()
		this.db = _dataBase
	}

	async execute(req, res) {
		try {
			this.ok(res, await this.db.get())
		} catch (error) {
			this.fail(res, error.toString())
		}
	}
}

module.exports = SquareMeterController
