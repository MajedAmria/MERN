const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        min:[3,"at least three characters"]
    }
},{timestamps:true});
module.exports.Author =mongoose.model('Author',AuthorSchema);