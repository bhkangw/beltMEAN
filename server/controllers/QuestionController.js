var mongoose = require("mongoose");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer");

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
	 
	addQuestion: function (req, res) {
		console.log("name!!", req.body.name)
		Question.create({ name: req.body.name, content: req.body.content, description: req.body.description }, function (err, question) {
			console.log("Created!!!!")
			Question.find({}).sort("-likes").exec(function (err, questions) {
				return res.json(questions);
			})
		})
	},

	addAnswer: function (req, res) {
		console.log("answer object!!", req.body)
		Question.findOne({_id: req.body.questionId}, function(err, question){
			console.log("question id of answer!!", req.body.questionId)
			Answer.create({content: req.body.content,name: req.body.name, description: req.body.description, question: req.body.questionId}, function(err, answer){
				question.answers.push(answer._id);
				console.log(question, '**** its here!!!!')
				console.log(answer)
				question.save(function(err, question){
res.json()
				})
				
			})
		})
		// Answer.create({ name: req.body.name, content: req.body.content, description: req.body.description, question: req.body.questionId, likes: 0 }, function (err, answer) {
		// 	console.log("Created ANSwer!!!!!!")
		// 	Answer.find({}).sort("-likes").exec(function (err, answers) {
		// 		return res.json(answers);
		// 	})
		// })
	},

	showAll: function (req, res) {
		Question.find({}).populate('answers')
			.exec(function (err, questions) {
				res.json(questions)
			})
	},

	// getOne: function (req, res) {
	// 	console.log("$%^&*()*&^%",req.params.id)
	// 	Question.findById(req.params.id, function (err, question) {
	// 		if (err) {
	// 			console.log("find one error", err);
	// 			res.json(err);
	// 		} else {
	// 			console.log("found one question");
	// 			res.json(question);
	// 		}
	// 	});
	// },
}
