import { Component } from '@angular/core'
import { IonicPage, NavController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openArticlePage() {
    this.navCtrl.push('ArticlePage')
  }

  openArticleClimatePage() {
    this.navCtrl.push('ArticleClimatePage')
  }

  openArticleInterestsPage() {
    this.navCtrl.push('ArticleInterestsPage')
  }

  openArticleDonationsPage() {
    this.navCtrl.push('ArticleDonationsPage')
  }

  openArticleMarketsPage() {
    this.navCtrl.push('ArticleMarketsPage')
  }

} 