/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';

import {Home} from 'modules/home/Home';
import {Beer} from 'modules/beer/Beer';
import {State} from 'modules/states/State';

@Component({
  selector: 'app'
})
@View({
  template: `
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo right">Beers of America</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li ><a [router-link]="['/home']" class="link">Home</a></li>
                    <li ><a [router-link]="['/state']" class="link">States</a></li>
                    <li ><a [router-link]="['/beer']" class="link">Beer</a></li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <router-outlet ></router-outlet>
    </div>

  `,
   directives: [State, Beer, Home, RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: '/', component: Home, as: 'home'},
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
