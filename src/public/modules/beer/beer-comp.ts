import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {Tooltip} from '../directives/tooltip';
import {BeerSvc} from'../services/beer-svc';
import {FavoriteCmp} from '../favorites/favorite-cmp';


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
        <div *ng-if="!loading">
          <p (click)="viewFavorites()"> {{favorites.length}} Favorites</p>
          <p>{{result.data.length}} Beers Found</p>
        </div>
      <div *ng-if="loading" class="progress">
        <div class="indeterminate"></div>
      </div>
          <ul class="collection" >
          <li class="collection-item avatar" *ng-for="#item of result.data" class="collection-item">
              <span class="title">{{item.nameDisplay}}</span>
              <p class="description">{{item.description}}
              </p>

              <favorite-btn [data]="item" (favorite)="saveBeer(item)"></favorite-btn>
            </li>
          </ul>
      </article>
    `,
    directives: [NgFor, NgIf, Tooltip, FavoriteCmp]
})
export class Beer {
    result: Object;
    error: Object;
    http:Http;
    favorites:any;
    beerSvc:BeerSvc;
    loading: Boolean;


    constructor(http: Http, beerSvc:BeerSvc) {

        this.http = http;
        this.beerSvc = beerSvc;


    }

    onInit(){
        this.result = {data:[]};
        this.favorites = [];
    }

    getBeers(search:string){
        this.loading = true;
        this.http.get('/beers/'+search).toRx().subscribe(res => {
            this.loading = false;
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

    saveBeer(obj:any){
        this.http.post('/favorites',
            JSON.stringify({
                    nameDisplay: obj.nameDisplay,
                    description: obj.description
                }))
        .toRx()
        .subscribe((res) => {
            this.favorites.push(res._body);
            console.log(this.favorites)

        });
    }

    viewFavorites(){
        console.log(this.favorites);
    }




}
