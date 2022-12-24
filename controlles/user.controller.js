

const User = require('../models/user.model')

const register = async (req , res)=>{
    try{
        const user = await User.create(req.body)
        return res.send(user).status(200)
    }catch(e){
        return res.send(500)
    }
}

const login = async (req , res)=>{
    try{
        const user = await User.find({email : req.body.email})
        if(user[0].password == req.body.password){
            return res.send(user[0]).status(200)
        }else{
            return res.send('please check password').status(400)
        }
    }catch(e){
        return res.send(500)
    }
}

module.exports = {register , login}