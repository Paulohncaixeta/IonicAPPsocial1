import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private apibase = "https://api.themoviedb.org/3";
  private apiKey = "760689f2848e5ae8e5cc3844513cd3c2";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  /*getLastMovie(){
    return this.http.get(this.apibase + "/movie/550?api_key=" + this.apiKey);
  }*/

  getLastMoviePopular(){
    return this.http.get(this.apibase + "/movie/popular?api_key=" + this.apiKey);
  }

  

  

}
