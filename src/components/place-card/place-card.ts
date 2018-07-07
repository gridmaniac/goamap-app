import { Component, Input } from '@angular/core';

/**
 * Generated class for the PlaceCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'place-card',
  templateUrl: 'place-card.html'
})
export class PlaceCardComponent {

  @Input() place: string;
  @Input() distance: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;

  constructor() {
  }

}
