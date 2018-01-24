import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';
import "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  user: string; 

  constructor(private _http: Http) { }

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

}
