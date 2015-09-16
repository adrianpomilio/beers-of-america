/// <reference path="typings/tsd.d.ts" />
import {Component, View, bootstrap, bind} from 'angular2/angular2';
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
  <div class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div>
                <ul class="nav navbar-nav">
                    <li ><a [router-link]="['/state']" class="link">States</a></li>
                    <li ><a [router-link]="['/beer']" class="link">Beer</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<router-outlet></router-outlet>
  `,
   directives: [State, Beer, RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: '/state', component: State, as: 'state'},
    {path: '/beer', component: Beer, as: 'beer'}
])

class App {
    router: Router;
    location: Location;

  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }
}



bootstrap(App, [HTTP_BINDINGS, ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
