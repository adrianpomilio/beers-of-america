/// <reference path="typings/tsd.d.ts" />
import {Component,View,bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';


import {Beer} from 'modules/beer/service/Beer';
import {State} from 'modules/states/service/State';

@Component({
  selector: 'app'
})
@View({
  template: `
  <div>
    <h1>Beers of America</h1>
    <beer-list></beer-list>
    <state-list></state-list>
  </div>
  `,
   directives: [State, Beer]
})

class App {

  constructor() {
  }
}



bootstrap(App, [HTTP_BINDINGS]);
