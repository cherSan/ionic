import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthPage } from '../auth/auth'
import { RegistrationPage } from '../registration/registration'
import { MapPage } from '../map/map'
import { ContactsPage } from '../contacts/contacts'
import { ProductsPage } from '../products/products'

/*
  Generated class for the IndexTabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-index-tabs',
  templateUrl: 'index-tabs.html'
})
export class IndexTabsPage {

  tab1Root: any = AuthPage;
  tab2Root: any = RegistrationPage;
  tab3Root: any = MapPage;
  tab4Root: any = ContactsPage;
  tab5Root: any = ProductsPage;

  constructor(public navCtrl: NavController) {

  }

}
