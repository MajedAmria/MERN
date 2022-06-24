const TeamController =require('../controllers/team.controller');
module.exports = function(app){
    app.get('/players/list',TeamController.findAllTeam);
    app.post('/players/addplayer',TeamController.newPlayer);
    app.get('/players/:id',TeamController.findOnePlayer);
    app.put('/players/:id',TeamController.updatePlayer);
    app.delete('/players/:id',TeamController.deletePlayer);
}