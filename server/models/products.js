const mongoose = require('mongoose')

const { Schema } = mongoose
const productSchema = new Schema({
  name: String,
  desc: String,
  image: String,
  price: Number,
  quantity: Number
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product