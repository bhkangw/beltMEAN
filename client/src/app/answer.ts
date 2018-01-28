export class Answer {
	public name: string;
	public content: string;
	public description: string;
	public questionId: string;
	public likes: number;
	public question: object;

	constructor() {
		this.name = "";
		this.content = "";
		this.description = "";
		this.questionId = "";
		this.likes = 0;
		this.question;
	}
}