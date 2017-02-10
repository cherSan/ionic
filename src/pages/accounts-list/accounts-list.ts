import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MainAccountPage} from "../main-account/main-account";

/*
  Generated class for the AccountsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accounts-list',
  templateUrl: 'accounts-list.html'
})
export class AccountsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsListPage');
  }

  showAccountDetail = () => {
    this.navCtrl.push(MainAccountPage, {id:1});
  }
}
