import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { ActivatedRoute, Router } from '@angular/router'; // router
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
  questionId;

  answer: Answer = new Answer();
  answers: Array<object> = [];

  constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {
    this._dataService.questionObserver.subscribe((questions) => {
      this.questions = questions;
    })

    this.questionId = _route.snapshot.params['id']
    console.log("id!!!!", this.questionId)
  }

  checkSess() {
    this._dataService.checkSess(res => {
      this.user = res;
      if (!this.user) {
        console.log("cant find")
        this._router.navigate(["/"]);
      }
    })
  }

  addAnswer(id) {
    console.log("dsadsdsad!!!!!",id)
    this.answer.name = this.user;
    this.answer.questionId = id;
    console.log("answerrrr", this.answer)
    this._dataService.addAnswer(this.answer, res => {
      console.log("answer back in comp")
      this._router.navigate(["/dashboard"]);
    })
  }

  ngOnInit() {
    this.checkSess()
    this._dataService.showAll()
  }

}
