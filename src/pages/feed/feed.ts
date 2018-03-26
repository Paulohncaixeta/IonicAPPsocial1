import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    title: "Paulo",
    date: "5 março, 2018",
    description:"Bem vindos ao melhor app",
    number_likes: 230,
    number_comments: 30,
    time_last_comment: "10 min ago" 
  }

  public Lista_filmes = new Array<any>();

  public nome_usuario:string = "Paulo";
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private MoovieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    /*this.MoovieProvider.getLastMovie().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      }, error=>{
        console.log(error);
      }
    )*/

    this.MoovieProvider.getLastMoviePopular().subscribe(
      data=>{
        console.log(data)
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.Lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error=>{
        console.log(error);
      }

    )
  }

}
