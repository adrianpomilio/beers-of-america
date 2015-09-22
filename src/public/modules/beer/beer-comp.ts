import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Tooltip} from '../directives/tooltip';
import {BeerSvc} from'../services/beer-svc';


@Component({
    selector: 'beer-list'
})

@View({
    template: `
      <article class="card-panel result-panel">
        <div class="row">
            <div class="input-field col s12">
            <i class="material-icons prefix" (click)="getBeers(search.value)">search</i>
            <input type="text" #search name="search" (keyup)="keyupGetBeers($event, search.value)" />
            <label for="icon_prefix">Beer</label>
            </div>
        </div>
      <p (click)="viewFavorites()"> {{favorites.length}} Favorites</p>
      <p>{{result.data.length}} Beers Found</p>
          <ul class="collection" >
          <li class="collection-item avatar" *ng-for="#item of result.data" class="collection-item">
              <span class="title">{{item.nameDisplay}}</span>
              <p class="description">{{item.description}}
              </p>
              <a (click)="saveBeer(item)" class="secondary-content btn"><i class="material-icons">favorite</i></a>
            </li>
          </ul>
      </article>
    `,
    directives: [NgFor, Tooltip]
})
export class Beer {
    result: Object;
    error: Object;
    http:Http;
    favorites:Array<Object>;
    beerSvc:BeerSvc;


    constructor(http: Http, beerSvc:BeerSvc) {
        this.result = {data:[]};
        this.favorites = [];
        this.http = http;
        this.beerSvc = beerSvc;

    }

    getBeers(search:string){
        this.http.get('/beers/'+search).toRx().subscribe(res => {
            this.result = res.json()
            }
        );
        /*this.beerSvc.getBeers(search);*/
    }

    keyupGetBeers(event:any, search:string){
        /* a place where typing can frustrate see ANY */
        if(event.keyCode == 13){
            this.getBeers(search);
        }

    }

    saveBeer(obj:Object){
        this.favorites.push(obj);
    }

    viewFavorites(){
        console.log(this.favorites);
    }




}
