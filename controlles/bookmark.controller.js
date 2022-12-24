
const Bookmark = require('../models/bookmark.model')

const createBookmark = async (req , res)=>{
    try{
        const created = await Bookmark.create(req.body)
        return res.send(created)
    }catch(e){
        return res.send(e.message).status(500)
    }
}


const getbookmarks = async (req , res) =>{
    try{
        const bookmarks = await Bookmark.find().populate('ticket')
        return res.send(bookmarks)
    }catch(e){
        return res.send(e.message).status(500)
    }
}

module.exports = {createBookmark , getbookmarks}
