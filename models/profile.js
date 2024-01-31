const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
    savedApods: [{ type: Schema.Types.ObjectId, ref: 'Apod'}],
    sharedApods: [{ type: Schema.Types.ObjectId, ref: 'Apod'}],
}, {
    timestamps: true 
})

module.exports = mongoose.model('Profile', profileSchema)