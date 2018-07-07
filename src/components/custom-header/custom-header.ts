import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {

  canGoBack: boolean;

  constructor(private navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.canGoBack = this.navCtrl.canGoBack();
  }

  goBack() {
    this.navCtrl.pop()
  }

}