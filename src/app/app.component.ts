import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {User} from "../providers/user";
import {Initialization} from "../providers/initialization";
import {InitializationPage} from "../pages/initialization/initialization";
import {IndexTabsPage} from "../pages/index-tabs/index-tabs";
import {UserTabsPage} from "../pages/user-tabs/user-tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InitializationPage;

  initializationFinish = false;
  userAuth = false;

  navigateCheck = () => {
    // if( !this.initializationFinish ) {
    //   this.rootPage = InitializationPage;
    // } else {
      if( !this.userAuth ) {
        this.rootPage = IndexTabsPage;
      } else {
        this.rootPage = UserTabsPage;
      }
    // }
  };

  constructor(public platform: Platform, user: User, initialization: Initialization) {
    this.initializeApp();


    initialization.initializationFinish.subscribe(val => {
      this.initializationFinish = val;
      this.navigateCheck();
    });

    user.userAuth.subscribe(val => {
      this.userAuth = val;
      this.navigateCheck();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
