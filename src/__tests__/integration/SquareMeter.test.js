const app = require('../../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

describe('Testing response', () => {
	it('should be return ok', (done) => {
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res.status).to.equal(200)
				expect(res.body.value).to.equal(10000)
				done()
			})
	})

	it('should be return not found', (done) => {
		chai.request(app)
			.get('/api')
			.end((err, res) => {
				expect(res.status).to.equal(404)
				done()
			})
	})

	it('should be return not implemented', (done) => {
		chai.request(app)
			.post('/')
			.end((err, res) => {
				expect(res.status).to.equal(404)
				done()
			})
	})
})
