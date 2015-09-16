var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var Beer_1 = require('modules/beer/service/Beer');
var State_1 = require('modules/states/service/State');
var App = (function () {
    function App(router, location) {
        this.router = router;
        this.location = location;
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n  <div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div>\n                <ul class=\"nav navbar-nav\">\n                    <li ><a [router-link]=\"['/state']\" class=\"link\">States</a></li>\n                    <li ><a [router-link]=\"['/beer']\" class=\"link\">Beer</a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n\n<router-outlet></router-outlet>\n  ",
            directives: [State_1.State, Beer_1.Beer, router_2.RouterLink, router_2.RouterOutlet]
        }),
        router_2.RouteConfig([
            { path: '/state', component: State_1.State, as: 'state' },
            { path: '/beer', component: Beer_1.Beer, as: 'beer' }
        ]), 
        __metadata('design:paramtypes', [router_2.Router, router_2.Location])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [http_1.HTTP_BINDINGS, router_1.ROUTER_BINDINGS, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);