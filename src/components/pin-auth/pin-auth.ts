import { Component } from '@angular/core';

/*
  Generated class for the PinAuth component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'pin-auth',
  templateUrl: 'pin-auth.html'
})
export class PinAuthComponent {

  pin: Array<number> = [];
  authProcess = false;

  setP = (val) => {
    if( this.pin.length < 4) {
      this.pin.push(val);
    }

    if( this.pin.length == 4 ) {
      this.authFunction();
    }
    console.log(this.pin);
  };

  authFunction() {
    this.authProcess = true;
    console.log(this.pin, 'AUTH');
  }

  clean = () => {
    this.pin = [];
  };

  removeLast = () => {
    this.pin.length = this.pin.length - 1;
  };

  constructor() {
    console.log('Hello PinAuth Component');
  }

}
