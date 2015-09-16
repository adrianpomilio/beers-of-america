import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {MapCmp} from 'modules/states/service/Map';


@Component({
    selector: 'state-list'

})

@View({
    directives: [NgFor, MapCmp],
    template: `
    <article>
        <h2>States</h2>
            <ul>
              <li *ng-for="#item of result" id="state-{{item.abbr}}" >
                  {{item.name}}
              </li>
          </ul>
      </article>
      <map [data]="result"></map>

    `
})

export class State {
    result: Array<Object>;
    error: Object;
    constructor(http: Http) {
        this.result = [{name:'hello'}];
        http.get('/states').toRx().subscribe(res => this.result = res.json());
    }

}
