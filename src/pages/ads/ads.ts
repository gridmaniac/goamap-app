import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsPage {

  mode
  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.initTab()
  }

  initTab(){
    this.mode = "ads";
  }

  ionViewDidLoad() {
    this.initTab()    
    console.log('ionViewDidLoad PlacesPage');
  }

  openNewAdModal() {
    // const params = {}
    // const modal = this.modalCtrl.create('NewAdPage', params);
    // modal.present();
  }

}