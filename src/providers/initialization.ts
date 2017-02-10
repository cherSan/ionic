import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs";

/*
  Generated class for the Initialization provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Initialization {

  private _initializationFinish = new BehaviorSubject<boolean>(false);
  public initializationFinish = this._initializationFinish.asObservable();

  constructor(public http: Http) {

    setTimeout(() => {
      this._initializationFinish.next(true);
    }, 2000);

    console.log('Hello Initialization Provider');
  }

}
