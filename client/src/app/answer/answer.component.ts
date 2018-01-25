import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router } from '@angular/router'; // router
import { Question } from "../question" // class
import { Answer } from "../answer" // class

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  user: string;
  question: Question = new Question();
  questions: Array<object> = [];

  answer: Answer = new Answer();
  answers: Array<object> = [];

  constructor(private _dataService: DataService, private _router: Router) { }

  checkSess() {
    this._dataService.checkSess(res => {
      this.user = res;
      if (!this.user) {
        console.log("cant find")
        this._router.navigate(["/"]);
      }
    })
  }

  addAnswer(quote) {
    this.answer.name = this.user;
    console.log("answerrrr", this.answer)
    this._dataService.addAnswer(this.answer, res => {
      console.log("answer back in comp")
      // this._router.navigate(["/dashboard"]);
    })
  }

  ngOnInit() {
    this.checkSess()
  }

}
