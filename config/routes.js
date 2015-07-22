var express = require('express');
var index = require('../routes/index.js');
var users = require('../routes/users.js');
var todo = require('../routes/todo.js');
//var todoRouter = express.Router();
var router={ 
	setupRoutes: function(app)
	{ 
		//app.use('/todos', todoRouter);
		//app.get('/', index);

		app.use('/',todo);
//		app.use('/',todo.all);
//		app.use('/:id',todo.viewOne);
//		app.use('/create', todo.create);
		//.post('/create', todo.create);
//		app.use('/destroy/:id',todo.destroy);
//		app.use('/edit/:id', todo.edit);
		
	}	
};

module.exports = router;	
