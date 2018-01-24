var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
	name: String,
	likes: Number,
	content: String,
}, { timestamps: true })

mongoose.model("Quote", QuoteSchema)