import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router } from '@angular/router'; // router

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: string;

  constructor(private _dataService: DataService, private _router: Router) { }
  checkSess(){
    this._dataService.checkSess((res) => {
      this.user = res;
      if(!this.user){
        console.log("cant find")
        this._router.navigate(["/"]);
      }
    })
  }

  ngOnInit() {
    this.checkSess()
  }

}
