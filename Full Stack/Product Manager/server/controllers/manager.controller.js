const {ProductManager}  = require('../models/manager.model');

module.exports.findAll = (request, response) => {
    ProductManager.find()
    .then(allProducts => response.json({allProducts}))
   .catch(err=> response.json({Masseges:"Erorr",error:err}));
}
module.exports.createManager = (request, response) => {
    const { title, price,description } = request.body;
    ProductManager.create({title:title,price:price,description:description})
        .then(mng => response.json(mng))
        .catch(err => response.json({err:err}));
}
module.exports.findProduct = (request,response) =>{
    ProductManager.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

