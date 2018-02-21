import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ProviderDefaultProvider } from '../../providers/provider-default/provider-default';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  films: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerDefault: ProviderDefaultProvider
  ) { this.films = this.providerDefault.getFilms();
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }

  ionViewDidLoad() {
  }

}
