
const Ticket = require('../models/ticket.model')

const createTicket = async (req , res)=>{
    try{
        const created = await Ticket.create(req.body)
        return res.send(created)
    }catch(e){
        return res.send(e.message).status(500)
    }
}


const getTickets = async (req , res) =>{
    const {id} = req.query
    try{
        const tickets = await Ticket.find({user : id})
        return res.send(tickets)
    }catch(e){
        return res.send(e.message).status(500)
    }
}

module.exports = {createTicket , getTickets}
