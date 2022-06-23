
const {Author} = require('../models/author.model');

module.exports.findAllAuthors = (request,response) =>{
    Author.find({})
    .then(allAuthors => response.json(allAuthors))
    .catch(err => response.json({Masseges:"Wrong",error:err}));
}
module.exports.newAuthor =(request,response) => {
    const {name} = request.body;
    Author.create({name:name})
    .then(author => response.json(author))
    .catch(err => response.json({error:err}))
    .catch(err => response.status(400).json(err))
}
module.exports.updateAuthor =(request, response) =>{
    Author.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(updatedAuthor =>response.json(updatedAuthor))
    .catch(err => response.json(err))
}
module.exports.findOneAuthors =(request,response) =>{
    Author.findOne({_id:request.params.id})
    .then(author => response.json(author))
    .catch(err=> response.json(err))
}
module.exports.deleteAuthor =(request,response) =>{
    Author.deleteOne({_id:request.params.id})
    .then(deletion => response.json(deletion))
    .catch(err => response.json(err))
}