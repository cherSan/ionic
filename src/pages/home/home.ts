import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Nav} from 'ionic-angular';
import {AccountsListPage} from "../accounts-list/accounts-list";
import {TransactionsPage} from "../transactions/transactions";

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  rootPage = AccountsListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Accounts', component: AccountsListPage },
      { title: 'Transactions', component: TransactionsPage }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
