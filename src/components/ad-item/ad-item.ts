import { Component, Input } from '@angular/core';

/**
 * Generated class for the AdItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ad-item',
  templateUrl: 'ad-item.html'
})
export class AdItemComponent {

  isOwned: boolean;
  @Input() owned: string;

  constructor() {
  }

  ngAfterContentInit() {
    this.setOwnership()
    console.log('this.isOwned')
    console.log(this.isOwned)
  }

  setOwnership() {
    this.isOwned = this.owned != undefined
  }

}