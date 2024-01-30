const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apodSchema = new Schema ({
    title: { type: String, required: true },
    url: { type: String, required: true },
    hdurl: { type: String },
    explanation: { type: String },
    date: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Apod', apodSchema)