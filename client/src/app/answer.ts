export class Answer {
	public name: string;
	public content: string;
	public description: string;
	public likes: number;
	public question: object;

	constructor() {
		this.name = "";
		this.content = "";
		this.description = "";
		this.likes = 0;
		this.question;
	}
}