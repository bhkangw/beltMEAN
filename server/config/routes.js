var Question = require("../controllers/QuestionController.js");
var path = require("path");

module.exports = function (app) {
	app.post("/login", function (req, res) {
		console.log("in backend routes")
		Question.login(req, res);
	});

	app.get("/sess", function (req, res) {
		console.log("in backend routes: checking session")
		Question.checkSess(req, res);
	});

	app.get("/logout", function (req, res) {
		Question.logout(req, res);
	});

	app.post("/addQuestion", function (req, res) {
		console.log("in backend routes: adding question")
		Question.addQuestion(req, res);
	});

	app.get("/showAll", function (req, res) {
		Question.showAll(req, res);
	});

	app.get("/question/:id", function (req, res) {
		console.log("in backend routes: getting ONE question")
		console.log(req.params.id)
		Question.getOne(req, res);
	});

	app.get("*", function (req, res) {
		res.sendFile(path.resolve("./client/dist/index.html"));
	});
}