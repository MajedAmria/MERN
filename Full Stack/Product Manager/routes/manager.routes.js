const ManagerController = require('../controllers/manager.controller');
module.exports = function(app){
    app.get('/api', ManagerController.index);
    app.post('/api/manager', ManagerController.createManager);
}