const mongoose = require('mongoose')

const connect = ()=> {
    return mongoose.connect('mongodb+srv://Gold123:Gold123@cluster0.aep119n.mongodb.net/ticket-system')
}
module.exports = connect