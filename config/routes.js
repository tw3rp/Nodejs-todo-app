var index = require('../routes/index.js');
var users = require('../routes/users.js');

var router={ 
	setupRoutes: function(app)
	{ 
		app.use('/',index);
		app.use('/users',users);
	}	
};

module.exports = router;	
