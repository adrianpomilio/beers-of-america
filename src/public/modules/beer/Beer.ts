import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http'

@Component({
    selector: 'beer-list'
})

@View({
    template: `
      <article class="card-panel">
      <h2>Beers <span class="new badge">{{result.data.length}}</span></h2>
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
          <ul class="collection" >
              <li *ng-for="#item of result.data" class="collection-item">
                  {{item.nameDisplay}}
              </li>
          </ul>
      </article>
    `,
    directives: [NgFor]
})

export class Beer {

    result: Object;
    error: Object;

    constructor(http: Http) {
        this.result = {data:[]};

        http.get('/beers/IPA').toRx().subscribe(res => this.result = res.json());
    }

}
