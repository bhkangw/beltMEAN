var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	name: String,
	content: String,
	description: String,
	answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
	answerCount: Number,
}, { timestamps: true, usePushEach: true })

mongoose.model("Question", QuestionSchema)