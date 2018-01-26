import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';
import "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  user: string; 
  questions: Array<object> = [];
  questionObserver = new BehaviorSubject(this.questions)

  answers: Array<object> = [];
  answerObserver = new BehaviorSubject(this.answers)

  oneQuestion = {};
  oneQuestionObserver = new BehaviorSubject(this.oneQuestion);

  constructor(private _router: Router, private _http: Http) {
  }

  login(user, cb){
    console.log("passing through service")
    this._http.post("/login", user).subscribe(res => {
      this.user = res.json();
      console.log("yoooo",this.user)
      cb(res.json())
    })
  }

  checkSess(cb){
    this._http.get("/sess").subscribe((res) => {
      console.log("session in service");
      cb(res.json());
    })
  }

  addQuestion(question, cb) {
    this._http.post("/addQuestion", question).subscribe(res => {
      this.questions = res.json();
      this.questionObserver.next(this.questions);
      console.log("questionnnnnn", question)
      console.log("questions!!!!", this.questions)
      this._router.navigate(['dashboard']);
    })
  }

  showAll() {
    this._http.get("/showAll").subscribe(res => {
      this.questions = res.json();
      this.questionObserver.next(this.questions);
    })
  }

  getOneQuestion(id, cb) {
    console.log("HERES THE ID", id)
    this._http.get("/question/:id").subscribe(res => {
        console.log("getting one question", res.json());
        this.oneQuestion = res.json();
        this.oneQuestionObserver.next(this.oneQuestion);
      }, err => {
        console.log("error getting one question", err);
      })
  }

  addAnswer(answer, cb) {
    this._http.post("/addAnswer", answer).subscribe(res => {
      this.answers = res.json();
      this.questionObserver.next(this.answers);
      console.log("answer", answer)
      console.log("answerssssss!!!!", this.answers)
      this._router.navigate(['dashboard']);
    })
  }

}
