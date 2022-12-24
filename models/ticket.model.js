
const mongoose = require('mongoose')

const Tikect = new mongoose.Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'User'
    } ,
    category : {type:String} ,
    title : {type : String} ,
    message : {type : String}
} , {
    timestamps:true
})

module.exports = mongoose.model('Ticket' , Tikect)