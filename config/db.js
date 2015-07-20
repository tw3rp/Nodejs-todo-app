var mongoose = require('mongoose');
//another module to make interactons with the db like collection, relationsal style
//var Schema   = mongoose.Schema;
var conn = mongoose.connection; //opens the connection

var uri = "mongodb://localhost/userlist";

conn.on('error',console.error.bind(console,"mongoose connection error"));// bind is from js and console gives the output on connection 
conn.once('open', function() {
		console.log("connected to mongoDB: ", uri);
		});
mongoose.connect(uri);
module.exports = conn;

