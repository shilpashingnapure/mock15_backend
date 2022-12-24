
const mongoose = require('mongoose')

const bookmark = new mongoose.Schema({
    ticket : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Ticket'
    }
} , {
    timestamps:true
})

module.exports = mongoose.model('bookmark' , bookmark)