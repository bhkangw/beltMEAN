import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router } from '@angular/router'; // router
import { Question } from "../question" // class

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: string;
  question: Question = new Question();
  questions: Array<object> = [];

  constructor(private _dataService: DataService, private _router: Router) {
    this._dataService.questionObserver.subscribe((questions) => {
      this.questions = questions;
    })
  }

  checkSess(){
    this._dataService.checkSess((res) => {
      this.user = res;
      if(!this.user){
        this._router.navigate(["/"]);
      }
    })
  }

  ngOnInit() {
    this.checkSess()
    this._dataService.showAll()
  }

}
