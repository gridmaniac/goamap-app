import { Component } from '@angular/core';

/**
 * Generated class for the DonateWidgetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'donate-widget',
  templateUrl: 'donate-widget.html'
})
export class DonateWidgetComponent {

  donation: string = '5';
  //TODO inspect bug
  //  for some reason type 'number' doesn't work well with ion-select interface='popover'
  //  string works fine though

  constructor() {
    console.log('Hello DonateWidgetComponent Component');  
  }

}