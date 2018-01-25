export class Question {
	public name: string;
	public content: string;
	public description: string;
	public answers: Array<any>;
	public answerCount: number;

	constructor() {
		this.name = "";
		this.content = "";
		this.description = "";
		this.answers = [];
		this.answerCount = 0;
	}
}