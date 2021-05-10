const expect = require('chai').expect
const SquareMeter = require('../../Models/SquareMeterModel')
describe('Testing SquareMeterModel', () => {
	const squareMeterModel = SquareMeter

	it('should be return default value', async () => {
		const data = await squareMeterModel.get()
		expect(data.value).to.equal(10000)
	})
})
