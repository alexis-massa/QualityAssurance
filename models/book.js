const mongoose = require('mongoose')
let mongooseHidden = require('mongoose-hidden')()

const { Schema } = mongoose
const bookSchema = new Schema({

}, { versionKey: false, timestamps: true })

bookSchema.plugin(mongooseHidden)

module.exports = mongoose.model('book', bookSchema)