var mongoose= require('mongoose'),
    User = require('../models/userlist');
var express= require('express');
var router=express.Router();

router.get('/all', function(req,res){
		//res.reder('index',
		User.find({}, function(err,todos){
			if(err) res.send(err);
			res.render('index',{todos:todos});
			});
	});

router.post('/create', function(req, res){
	//	res.render('index')
		
		var email1=req.body.email;
		User.create({email:email1},function(err, todo){
		console.log(req.body.email);
		if(err) console.log("I am wrong");
		res.redirect('/all');
		});
	});
router.get('/delete/:id', function(req,res){
		var id=req.params.id;
		User.findByIdAndRemove(id,function(err,todo){
	//	console.log(id);
			if(err) console.log("I am wrong");
			res.redirect('/all');
		});
	});
module.exports = router;
/*module.exports = {
	all: function(req, res){
		User.find({}, function(err,todos){
			console.log("I am all");
			if(err) res.send(err);
			res.json(todos);

		});

	},
	viewOne: function(req, res){
		console.log('Viewing ' + req.params.id);
	},
	create: function(req, res){
		console.log("I am create");
		var todoContent = req.body.content;
		User.create({firstname:todoContent}, function(err, todo){
		if(err) res.send("I am wrong"); 
//res.render('error', {error:'error'})
		res.redirect('/todos');
	});
	
	},
	edit: function(req, res){
		console.log('Todo'+ req.params.id + 'edited');
	},
	destroy: function(req, res){
		console.log('todo deleted');
	}
};
*/
