var polls = require('./../controllers/polls.js');
var path = require('path')



module.exports = function(app){

  //app.post('/login', polls.login);
  app.post('/create', polls.createQuestion);
  app.get('/show', polls.showQuestions);
  app.get('/delete/:id', polls.delete);
  app.get('/showone/:id', polls.showOne);

   app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
  
}