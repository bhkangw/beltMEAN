var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");

module.exports = {
	login: function(req,res){
		console.log("in controller", req.body);
		req.session.user = req.body.name;
		return res.json(req.session.user)
	},
	
	checkSess: function (req, res) {
		if (req.session.user == undefined) {
			console.log("check session:", req.session.user)
			return res.json(null)
		}
		return res.json(req.session.user);
	},

  	logout: function(req,res){
		req.session.destroy();
		res.redirect("/");
 	},
}
