import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  contactsFilter: string = "";

  onDataInput(e) {
    if( this.contactsFilter != "" ) {
      this.filteredListOfContacts = this.listOfContacts.filter((val) => {
        return val['name'].toUpperCase().indexOf(this.contactsFilter.toUpperCase()) >= 0 ||
          val['address'].toUpperCase().indexOf(this.contactsFilter.toUpperCase()) >= 0 ||
          val['phone'].toUpperCase().indexOf(this.contactsFilter.toUpperCase()) >= 0;
      });
    } else {
      this.filteredListOfContacts = this.listOfContacts;
    }
  }

  onDataCancel(e) {
    this.filteredListOfContacts = this.listOfContacts;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  listOfContacts: Array<Object> = [
    {
      name: '1Russia',
      phone: '+790456078491',
      address: 'Russia, blablabla1'
    },
    {
      name: '1Russia',
      phone: '+790456078492',
      address: 'Russia, blablabla4'
    },
    {
      name: '2Russia',
      phone: '+790456078493',
      address: 'Russia, blablabla3'
    },
    {
      name: '2Russia',
      phone: '+790456078494',
      address: 'Russia, blablabla2'
    },
    {
      name: '3Russia',
      phone: '+790456078494',
      address: 'Russia, blablabla2'
    }
  ];

  filteredListOfContacts = this.listOfContacts;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
