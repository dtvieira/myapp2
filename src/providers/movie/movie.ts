import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }


  getLatestMovies(){
      return this.http.get(this.baseApiPath + "/movie/latest?api_key=bb4a9fa1d7fd31d7c78b29ba71b259de&language=en-US");
  }

}
