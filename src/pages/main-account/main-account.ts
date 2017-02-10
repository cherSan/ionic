import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MainAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-account',
  templateUrl: 'main-account.html'
})
export class MainAccountPage {
  id;
  pet = 'details';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainAccountPage');
  }

  goBack = () => {
    this.navCtrl.pop();
  }

}
