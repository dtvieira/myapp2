import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderDefaultProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderDefaultProvider {

  constructor(public http: HttpClient) {
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }

}
