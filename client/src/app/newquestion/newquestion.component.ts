import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router } from '@angular/router'; // router
import { Question } from "../question" // class

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  user: string;
  question: Question = new Question();
  questions: Array<object> = [];

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

  addQuestion(question) {
    this.question.name = this.user;
    console.log("What", this.question)
    this._dataService.addQuestion(this.question, res => {
      console.log("question back in comp")
      this._router.navigate(["/dashboard"]);
    })
  }

  ngOnInit() {
    this.checkSess()
  }

}
