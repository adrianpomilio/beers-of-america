import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Tooltip} from '../directives/tooltip';


@Component({
    selector: 'beer-list'
})

@View({
    template: `
      <article class="card-panel">
      <h2>Beers </h2>
        <div class="input-field col s6">

          <input type="text" #search name="search" />
          <label for="icon_prefix">Beer</label>
          <i class="material-icons btn" (click)="getBeers(search.value)">search</i>
          </div>

      <p (click)="viewFavorites()"> {{favorites.length}} Favorites</p>
      <p>{{result.data.length}} Beers Found</p>
          <ul class="collection" >
          <li class="collection-item avatar" *ng-for="#item of result.data" class="collection-item">
              <span class="title">{{item.nameDisplay}}</span>
              <p>{{item.description}}
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


    constructor(http: Http) {
        this.result = {data:[]};
        this.favorites = [];
        this.http = http;

    }

    getBeers(search:string){
        this.http.get('/beers/'+search).toRx().subscribe(res => {
            this.result = res.json()
            }
        );
    };

    saveBeer(obj:Object){
        this.favorites.push(obj);
    }

    viewFavorites(){
        console.log(this.favorites);
    }


}
