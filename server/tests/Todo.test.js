import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it} from 'mocha'
import app from '../Server.js'


Chai.should()
Chai.use(ChaiHTTP)


const testingExistingRoute = () => {
    describe('Testing a route that exist', () => {
        it('Expecting 200 OK', (done) => {
            Chai.request(app)
            .get('/todo')
            .end((request, response) => {
                response.should.have.a.status(200)
                done()
            })
        })
    })
}



describe('TESTING THE TODO API ROUTE', () => {
        testingExistingRoute()
})