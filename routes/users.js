/*var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var User = require('../models/userlist');

var person = {email:'rahul2@gmail.com'};
// GET users listing. 
router.get('/users', function(req, res, next) {
//	person.save(function(err,todo, user){
//		console.log(user);
//		});
	res.send('respond with a resource');

	});

//var create= function(req,res){
//	new User().save(function(err,todo,count){res.redirect('/');});
//};
//
module.exports = router;*/
var express = require('express');
var router = express.Router();
var User = require('../models/userlist');
var person= {email:'rahuldprabhu@gmail.com'};
/* GET home page. */
router.get('/', function(req, res) {
  	User.find(function(err,todos,count){
	if(err) res.send(err); 
	res.render('todos',{title:'Express todo',todos :todos});});
});
//	res.send("this is users");


router.get('/create',function(req,res){
	new User({email: req.body.content}).save(function(err, todo,count){
            if(err) res.render('error', { error: 'Error creating your todo :('})
	});
	res.send(User);
	});






module.exports = router;

