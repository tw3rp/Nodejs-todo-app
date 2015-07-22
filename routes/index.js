
var express = require('express');
var router = express.Router();

var Users = require('../models/userlist.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  	Users.find( function (err,todos, count){
  			res.render('index', { title: 'Things ToDO', todos:todos 
		});
	});
});	


router.get('/helloworld', function(req,res)
	{
		res.render('helloworld',{ title: 'Hello, World!'});
	});
router.get('/show', function(req,res){
	var todoContent= req.body.content;
	//create a todo
	Users.create({ content: todoContent}, function(err, todo){ 	  if(err) res.send('Error creating your todo :(');    
	
	res.redirect('/todos'); }
);
});
module.exports = router;

