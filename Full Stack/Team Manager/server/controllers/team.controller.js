const {Team} = require('../models/team.model');

module.exports.findAllTeam = (request,response) =>{
    Team.find()
    .then(allTeams =>response.json(allTeams))
    .catch(err => response.json({Masseges:"Wrong",error:err}));
}
module.exports.newPlayer = (request,response) =>{
    const {playername,preferedposition}= request.body;
    Team.create({playername,preferedposition})
    .then(team => response.json(team))
    .catch(err => response.json(err))
}
module.exports.findOnePlayer = (request,response) =>{
    Team.findOne({_id:request.params.id})
    .then(team => response.json(team))
    .catch(err => response.json(err))
}
module.exports.updatePlayer =(request,response)=>{
    Team.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(updatedPlayer => response.json(updatedPlayer))
    .catch(err => response.json(err))
}
module.exports.deletePlayer =(request,response)=>{
    Team.deleteOne({_id:request.params.id})
    .then(deleted => response.json(deleted))
    .catch(err => response.json(err))
}