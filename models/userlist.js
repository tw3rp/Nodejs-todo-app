var mongoose= require("mongoose"),
Schema= mongoose.Schema;

var UserSchema= Schema(
	{
		firstname:{type: String, required: true},
		lastname: {type: String, required:true},
		email:	  {type:String,  required:true},
	//	content: String,
	//	completed: { type:Boolean, default: false},
	//	updated_at: {type: Date, default: Date.now}

	}); 
var User=mongoose.model('User',UserSchema);
module.exports= User;

