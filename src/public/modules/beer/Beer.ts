import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Tooltip} from '../directives/tooltip';


@Component({
    selector: 'beer-list'
})

@View({
    template: `
      <article class="card-panel">
      <h2>Beers <span class="new badge">{{result.data.length}}</span></h2>
      <label>Get Some Beer:</label>
      <input type="text" #search name="search" />
      <button (click)="getBeers(search.value)">go</button>
          <ul class="collection" >
              <li *ng-for="#item of result.data" class="collection-item" [tooltip]="item.nameDisplay">
                  {{item.nameDisplay}}
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


    constructor(http: Http) {
        this.result = {data:[]};
        this.http = http;

    }

    getBeers(search:string){
        console.log(search);
        this.http.get('/beers/'+search).toRx().subscribe(res => {
            console.log(res);
            this.result = res.json()
            }
        );
    };


}
