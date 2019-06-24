const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect

describe('for all that related to users model', function() {
  describe('login through /api/users/login', function() {
    describe('success logging in', function() {
      it('get user authentication token and user information beside password in an object with status code 200', (done) => {
        let input = {
          email: 'jays@mail.com',
          password: '12345678'
        }
        chai
          .request(app)
          .post('/api/users/login').send(input)
          .then(res => {
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.all.keys('token', 'user')
            done()
          })
          .catch(err => {console.log(err)})
      })
    })
    describe('sending wrong password/email', function() {
      it('get an 400 error status with an error message', (done) =>{
        let input = {
          email: 'wrongemail',
          password: 'wrongpassword'
        }
        chai
          .request(app)
          .post('/api/users/login').send(input)
          .then()
          .catch(err => {
            expect.fail(err.message)
            expect(err).to.have.status(400)
            done()
          })
      })
    })
  })
  describe('register to /api/users/registor', function() {
    describe('success register', function() {
      it('not sending anyhting lol', (done) => {
        
      })
    })
  })
})