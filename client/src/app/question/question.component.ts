import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router, ActivatedRoute } from '@angular/router'; // router
import { Question } from "../question" // class

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  user: string;
  questionId;
  question;
  questions: Array<object> = [];

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    this._dataService.oneQuestionObserver.subscribe(question => {
      this.question = question;
    })

    this._dataService.questionObserver.subscribe((questions) => {
      this.questions = questions;
    })

    this._route.paramMap.subscribe(params => {
      // this._dataService.getOneQuestion(params.get('id'));
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

  // getOneQuestion() {
  //   var questionId = this.questionId;
  //   this._dataService.getOneQuestion(questionId, res => {
  //     console.log("GOT QUESTION ID back in comp")
  //     // this._router.navigate(["/dashboard"]);
  //   })
  // }

  ngOnInit() {
    // this._dataService.getOneQuestion("5a6a434d440a176755fe0195")
  //   this.question = this._dataService.getOneQuestion(this.question, res => {
  //     console.log(res)
  //     this.question.content = res.content;
  //   });
  // }

  // ngOnDestroy() {
  //   this._dataService.updateQuestion(this.question);
  // }
    this.checkSess()
    // this.getOneQuestion()
    this._dataService.showAll()
  }
}
