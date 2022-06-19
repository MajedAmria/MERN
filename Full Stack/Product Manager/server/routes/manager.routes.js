const ManagerController = require('../controllers/manager.controller');
module.exports = function(app){
    
    app.get('/api', ManagerController.findAll);
    app.post('/api/manager', ManagerController.createManager);
    app.get('/api/product/:id',ManagerController.findProduct);
}