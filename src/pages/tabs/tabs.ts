import { Component } from '@angular/core'
import { IonicPage } from 'ionic-angular'

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage'
  tab2Root = 'PlacesPage'
  tab3Root = 'AdsPage'
  tab4Root = 'FavoritePage'
  tab5Root = 'AccountPage'

  constructor() {

  }
}