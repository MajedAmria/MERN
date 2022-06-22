const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/author',AuthorController.findAllAuthors);
    app.post('/api/author/new',AuthorController.newAuthor);
    app.get('/api/author/:id',AuthorController.findOneAuthors);
    app.put('/api/auhtor/edit/:id',AuthorController.updateAuthor);
    app.delete('/api/author/:id',AuthorController.deleteAuthor);

    
}