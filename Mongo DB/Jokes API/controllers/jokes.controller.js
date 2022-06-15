const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req,res)=>{
  Joke.find().then(allJokes => res.json({jokes : allJokes}))
  .catch(err => res.json({message:"Wrong",error:err}));  
};

module.exports.findSingleJoke =(req,res) => {
    Joke.findOne({_id:req.params.id}).then(singleJoke => res.json({joke:singleJoke}))
    .catch(err => res.json({message:"Wrong",error:err}));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
      .then(createdJoke => res.json({ joke: createdJoke }))
      .catch(err => res.json({ message: "Wrong", error: err }));
  };

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Wrong", error: err }));
  };
  
module.exports.deleteSpecificJokes = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Wrong", error: err }));
  };