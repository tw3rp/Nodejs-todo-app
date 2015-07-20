var mongoose= require("mongoose"),
Schema= mongoose.Schema;

var UserSchema= Schema(
	{
		firstname:{type: String, required: true},
		lastname: {type: String, required:true},
		email:	  {type:String,  required:true}}


	); 
var User=mongoose.model('User',UserSchema);
module.exports= User;

