import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs";

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {

  constructor(public http: Http) {
    console.log('Hello User Provider');
  }

  private _userAuth = new BehaviorSubject<boolean>(false);
  public userAuth = this._userAuth.asObservable();

  private _pinAuthIsPossible = new BehaviorSubject<boolean>(false);
  public pinAuthIsPossible = this._pinAuthIsPossible.asObservable();

  authorize = () => {
    this._userAuth.next(true);
    this._pinAuthIsPossible.next(true);
  };

  logout = () => {
    this._userAuth.next(false);

  };

}
