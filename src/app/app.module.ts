import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {User} from "../providers/user";
import {Initialization} from "../providers/initialization";
import {InitializationPage} from "../pages/initialization/initialization";
import {IndexTabsPage} from "../pages/index-tabs/index-tabs";
import {AuthPage} from "../pages/auth/auth";
import {ContactsPage} from "../pages/contacts/contacts";
import {RegistrationPage} from "../pages/registration/registration";
import {MapPage} from "../pages/map/map";
import {ProductsPage} from "../pages/products/products";
import {UserTabsPage} from "../pages/user-tabs/user-tabs";
import {HomePage} from "../pages/home/home";
import {AccountsListPage} from "../pages/accounts-list/accounts-list";
import {TransactionsPage} from "../pages/transactions/transactions";
import {ConnectivityService} from "../providers/connectivity-service";
import {MainAccountPage} from "../pages/main-account/main-account";
import {PinAuthComponent} from "../components/pin-auth/pin-auth";
import {BaseAuthComponent} from "../components/base-auth/base-auth";

@NgModule({
  declarations: [
    MyApp,

    InitializationPage,

    IndexTabsPage,
    AuthPage,
    RegistrationPage,

    ContactsPage,
    MapPage,
    ProductsPage,

    UserTabsPage,
    HomePage,

    AccountsListPage,
    MainAccountPage,

    TransactionsPage,


    PinAuthComponent,
    BaseAuthComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: true,
      tabsHighlight: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    InitializationPage,

    IndexTabsPage,
    AuthPage,
    RegistrationPage,

    ContactsPage,
    MapPage,
    ProductsPage,

    UserTabsPage,
    HomePage,

    AccountsListPage,
    MainAccountPage,


    TransactionsPage,

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    User,
    Initialization,

    ConnectivityService
  ]
})
export class AppModule {}
