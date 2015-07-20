
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Things ToDO' });
});

router.get('/helloworld', function(req,res)
	{
		res.render('helloworld',{ title: 'Hello, World!'});
	});
router.get('/fuck', function(req,res){
	
	res.send("this is fuck"); 

});
module.exports = router;

