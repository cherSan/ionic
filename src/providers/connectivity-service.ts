import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Injectable()
export class ConnectivityService {

  onDevice: boolean;

  constructor(public platform: Platform){
    this.onDevice = this.platform.is('cordova');
  }

  isOnline(): boolean {
    // console.log(Network,  Network.onC);
    // if(this.onDevice && Network.connection){
    //   return Network.connection !== Connection.NONE;
    // } else {
    //   return navigator.onLine;
    // }
    return true;
  }

  isOffline(): boolean {
    // if(this.onDevice && Network.connection){
    //   return Network.connection === Connection.NONE;
    // } else {
    //   return !navigator.onLine;
    // }
    return false;
  }
}
