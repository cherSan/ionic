import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { MapPage } from '../map/map'
import { ContactsPage } from '../contacts/contacts'
import { ProductsPage } from '../products/products'
import {User} from "../../providers/user";

/*
  Generated class for the UserTabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-user-tabs',
  templateUrl: 'user-tabs.html'
})
export class UserTabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = MapPage;
  tab3Root: any = ContactsPage;
  tab4Root: any = ProductsPage;

  constructor(public navCtrl: NavController, private user: User) {

  }

  logout = () => {
    this.user.logout();
  }

}
