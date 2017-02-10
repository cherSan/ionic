import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../providers/user";

/*
  Generated class for the Auth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  pinAuthIsPossible: boolean = false;
  authType: string;

  constructor(public navCtrl: NavController, private _user: User) {
    _user.pinAuthIsPossible.subscribe(val => {
      this.pinAuthIsPossible = val;
      this.authType = this.pinAuthIsPossible ? 'pin_auth' : 'main_auth'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  baseAuth = () => {
    this._user.authorize();

  }

}
