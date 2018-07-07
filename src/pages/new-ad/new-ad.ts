import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-ad',
  templateUrl: 'new-ad.html',
})
export class NewAdPage {

  category: string = 'rent'
  express: boolean = false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAdPage');
  }

  dismissModal() {
    this.navCtrl.pop()
  }

}