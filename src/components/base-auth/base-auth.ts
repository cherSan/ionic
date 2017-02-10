import {Component, Input} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";

/*
  Generated class for the BaseAuth component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'base-auth',
  templateUrl: 'base-auth.html'
})
export class BaseAuthComponent {

  userForm: any;

  @Input()
  authFunction: any;

  constructor(private _formBuilder: FormBuilder) {
    console.log('Hello BaseAuth Component');
    this.userForm = _formBuilder.group({
      login: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ])
      ],
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ])
      ],
    });
  }

  auth = () => {
    console.log(this.userForm.value);
    this.authFunction();
  }

}
