const lowdb = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const { DATABASE_FILE } = require('../utils/constants')

console.log('DATABASE', DATABASE_FILE)
class SquareMeterModel {
	constructor() {
		this.adapter = new FileAsync(DATABASE_FILE)
		this.initDataBase()
	}

	async initDataBase() {
		this.db = await lowdb(this.adapter)
		this.db.defaults({ squareMeter: { value: 10000 } }).write()
	}

	async get() {
		return this.db?.get('squareMeter').value()
	}
}

const SquareMeter = new SquareMeterModel()

module.exports = SquareMeter
