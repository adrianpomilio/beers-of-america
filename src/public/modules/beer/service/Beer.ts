import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http'

@Component({
    selector: 'beer-list'
})

@View({
    template: `
      <article>
      <h2>Beers</h2>
          <ul>
              <li *ng-for="#item of result.data">
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
