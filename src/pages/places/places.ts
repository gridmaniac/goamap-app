import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  
  mode
  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.initTab()
  }

  initTab(){
    this.mode = "map";
  }

  ionViewDidLoad() {
    this.initTab()    
    console.log('ionViewDidLoad PlacesPage');
  }

  openFilterModal() {
    const params = {}
    const modal = this.modalCtrl.create('MapFilterPage', params);
    modal.present();
  }

}