
const Author = require('../models/authors.model')

// create 
module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json({err}))
}

// get all
module.exports.allAuthors = (req,res)=>{
    Author.find()
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json({err}))
}

// get one
module.exports.getOneAuthor = (req,res)=>{
    Author.findById({_id:req.params.id})
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json({err}))
}

// update one
module.exports.updateAuthor = (req,res)=>{ // runValidators below is very important!!!!
    Author.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor=>res.json(updatedAuthor))
        .catch(err=>res.status(400).json({err}))
}

// delete one
module.exports.deleteAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then(deletedAuthor=>res.json(deletedAuthor))
    .catch(err=>res.status(400).json({err}))
}