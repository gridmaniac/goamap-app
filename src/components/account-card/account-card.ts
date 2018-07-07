import { Component } from '@angular/core';

/**
 * Generated class for the AccountCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account-card',
  templateUrl: 'account-card.html'
})
export class AccountCardComponent {

  text: string;

  constructor() {
    console.log('Hello AccountCardComponent Component');
    this.text = 'Hello World';
  }

}
