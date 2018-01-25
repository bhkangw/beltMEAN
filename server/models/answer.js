var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	name: String,
	content: String,
	description: String,
	question: { type: Schema.Types.ObjectId, ref: "Question" },
	likes: Number
}, { timestamps: true, usePushEach: true })

mongoose.model("Answer", AnswerSchema)