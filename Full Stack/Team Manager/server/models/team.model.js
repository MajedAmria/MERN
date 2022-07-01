const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    playername:{
        type:String,
        minLength:[2,"name must be at least two character"]
    },
    preferedposition:{
        type:String,
        
    },
    game1:{
        type:String,
      
    },
    game2:{
        type:String,
       
    },
    game3:{
        type:String,
      
    }
},{timestamps:true});
module.exports.Team =mongoose.model('Team',TeamSchema);