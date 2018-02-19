import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MovieProvider } from "../../providers/movie/movie";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html",
  providers: [MovieProvider]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Daniel Torres Vieira",
    data: "February 17, 2018",
    descricao: "E la vamos nós.",
    qntd_likes: 12,
    qntd_coments: 2,
    time_coment: "11h ago"
  };

public lista_filmes = new Array<any>();

  public nome_usuario: string = "Daniel Torres Vieira";
  public num1: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {}

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const objeto_retorno = JSON.parse((data as any)._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      }
    );
  }
}
