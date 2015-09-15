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
var Beer_1 = require('modules/beer/service/Beer');
var State_1 = require('modules/states/service/State');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n  <div>\n    <h1>Beers of America</h1>\n    <beer-list></beer-list>\n    <state-list></state-list>\n  </div>\n  ",
            directives: [State_1.State, Beer_1.Beer]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [http_1.HTTP_BINDINGS]);
