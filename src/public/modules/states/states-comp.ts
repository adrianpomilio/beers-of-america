import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {MapCmp} from 'modules/states/map-comp';


@Component({
    selector: 'state-list'

})

@View({
    directives: [NgFor, MapCmp],
    template: `
    <article class="card-panel" >
        <h2>States</h2>
            <ul class="collection">
              <li *ng-for="#item of result" id="state-{{item.abbr}}" class="collection-item" >
                  {{item.name}}
              </li>
          </ul>
      </article>
      <map-view clas="card-panel" [data]="result"></map-view>

    `
})

export class State {
    result: Array<Object>;
    error: Object;


    constructor(http: Http) {
        this.result = [];

        http.get('/states').toRx().subscribe(res => {
                this.result = res.json()
            } );
    }



}
