
const express = require('express')
const connect = require('./config/db')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())



const {register , login} = require('./controlles/user.controller')

const {createTicket  , getTickets} = require('./controlles/ticket.controller')

const {createBookmark , getbookmarks} = require('./controlles/bookmark.controller')

app.post('/signup',register)
app.post('/login' , login)

app.post('/create_ticket' , createTicket)

app.get('/tickets' , getTickets)

app.post('/create_bookmark' , createBookmark)

app.get('/bookmark' , getbookmarks)

const port = process.env.PORT || 5000
app.listen(port , async (req , res)=>{
    await connect()
    console.log('running port 5000.....')

})