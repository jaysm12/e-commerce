const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect

let createdProductId

// ------------- CREATE --------------------------
describe('create from /api/products', function() {
  describe('create new product', function() {
    it('send an object 200 status code', (done) => {
      let input = {
        name: 'kaos', 
        price: 70000,
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: 200
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.all.keys('name', 'price', 'description', 'brand', 'quantity')
          for(let i in input) {
            expect(res.body[i]).to.equal(input[i])
            expect(typeof res.body[i]).to.be.an(typeof input[i])
          }
          createdProductId = res.body._id
          done()
        })
    })
  })
  describe('creating a new product with wrong data types', function() {
    it('send an 400 status error code', (done) => {
      let input = {
        name: 12345, 
        price: 70000,
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: 200
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
        })
        .catch(err => {
          expect(err).to.have.status(400)
          expect.fail(err.message)
          done()
        })
    })
  })
  describe('creating a new product with empty names', function() {
    it('send an 400 status error code', (done) => {
      let input = {
        name: '', 
        price: 70000,
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: 200
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
        })
        .catch(err => {
          expect(err).to.have.status(400)
          expect.fail(err.message)
          done()
        })
    })
  })
  describe('creating a new product with empty price or zero', function() {
    it('send an 400 status error code', (done) => {
      let input = {
        name: 'kaos', 
        price: '',
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: 200
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
        })
        .catch(err => {
          expect(err).to.have.status(400)
          expect.fail(err.message)
          done()
        })
    })
  })
  describe('creating a new product with empty description', function() {
    it('send an 400 status error code', (done) => {
      let input = {
        name: 'kaos', 
        price: 70000,
        description: '',
        brand: 'adidaw',
        quantiy: 200
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
        })
        .catch(err => {
          expect(err).to.have.status(400)
          expect.fail(err.message)
          done()
        })
    })
  })
  describe('creating a new product with empty brand', function() {
    it('send an 400 status error code', (done) => {
      let input = {
        name: 'kaos', 
        price: 70000,
        description: 'kaos tapi celana',
        brand: '',
        quantiy: 200
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
        })
        .catch(err => {
          expect(err).to.have.status(400)
          expect.fail(err.message)
          done()
        })
    })
  })
  describe('creating a new product with empty quantity', function() {
    it('success created a product with status 200 but the quantity will be default value (1)', (done) => {
      let input = {
        name: 'kaos', 
        price: 70000,
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: ''
      }
      chai
        .request(app)
        .post('/api/products').send(input)
        .then(res => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.all.keys('name', 'price', 'description', 'brand', 'quantity')

          expect(res.body.name).to.be.a('string')
          expect(res.body.description).to.be.a('string')
          expect(res.body.quantiy).to.be.a('number')
          expect(res.body.brand).to.be.a('string')
          expect(res.body.price).to.be.a('number')
      
          expect(res.body.name).to.eql('kaos')
          expect(res.body.price).to.eql(70000)
          expect(res.body.description).to.eql('kaos tapi celana')
          expect(res.body.brand).to.eql('adidaw')
          expect(res.body.quantiy).to.eql(1)
          done()
        })
        .catch(err => {
          console.log(err)
        })
    })
  })  
})

// ----------------- READ ALL ----------------------

describe('read from /api/products', function() {
  describe('read all', function() {
    it('should send an array 200 status code', (done) => {
      chai
        .request(app)
        .get('/api/products')
        .then(res => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('array'),
          done()
        })
        .catch(err => {
          console.log(err)
        })
    })
  })
  describe('read by id', function() {
    it('send an object with 200 status code', (done) => {
      chai
        .request(app)
        .get(`/api/products/${createdProductId}`)
        .then(res => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.all.keys('name', 'price', 'description', 'brand', 'quantity')
          done()
        })
        .catch(err => {console.log(err)})
    })
  })
})

// -------------- DELETE ----------------

describe('delete from /api/products', function() {
  describe('success delete with correct and existing id product', function() {
    it('should send a success message with 200 status code', (done) => {
      chai
        .request(app)
        .delete(`/api/products/${id}`)
        .then(res => {
          expect(res.body).to.have.property
          expect(res).to.have.status(200)
          done()
        })
        .catch(err => {
          console.log(err)
        })
    })
  })
  describe('get error by sending wrong id format', function() {
    it('should send an error with status code 400', (done) => {
      chai
        .request(app)
        .delete(`/api/products/MANTAP`)
        .then(res => {
        })
        .catch(err => {
          expect(err).to.have.status(400)
          expect.fail(err.message)
          done()
        })
    })
  })
})

// ---------------- EDIT ------------------

describe('edit from /api/products', function() {
  describe('success edit with correct input and correct id', function() {
    it('send a success 200 code and an edited product object', (done) => {
      let input = {
        name: 'kaos lengan panjang', 
        price: 70000,
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: 80
      }
      chai
        .request(app)
        .patch(`api/products/${createdProductId}`).send(input)
        .then(res => {
          expect(res).have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.all.keys('name', 'price', 'description', 'brand', 'quantity')
          done()
        })
    })
  })
  describe('sending edit with wrong id', function() {
    it('send an 400 error code', function() {
      let input = {
        name: 'kaos lengan panjang', 
        price: 70000,
        description: 'kaos tapi celana',
        brand: 'adidaw',
        quantiy: 80
      }
      chai
        .request(app)
        .patch(`api/products/MANTAP`).send(input)
        .then(res => {

        })
        .catch(err => {
          expect.fail(err.message)
          expect(err).to.have.status(400)
        })
    })
  })
})