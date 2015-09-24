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
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var tooltip_1 = require('../directives/tooltip');
var beer_svc_1 = require('../services/beer-svc');
var Beer = (function () {
    function Beer(http, beerSvc) {
        this.result = { data: [] };
        this.favorites = [];
        this.http = http;
        this.beerSvc = beerSvc;
        this.loading = false;
    }
    Beer.prototype.getBeers = function (search) {
        var _this = this;
        this.loading = true;
        this.http.get('/beers/' + search).toRx().subscribe(function (res) {
            _this.loading = false;
            _this.result = res.json();
        });
        /*this.beerSvc.getBeers(search);*/
    };
    Beer.prototype.keyupGetBeers = function (event, search) {
        /* a place where typing can frustrate see ANY */
        if (event.keyCode == 13) {
            this.getBeers(search);
        }
    };
    Beer.prototype.saveBeer = function (obj) {
        this.favorites.push(obj);
    };
    Beer.prototype.viewFavorites = function () {
        console.log(this.favorites);
    };
    Beer = __decorate([
        angular2_1.Component({
            selector: 'beer-list'
        }),
        angular2_1.View({
            template: "\n      <article class=\"card-panel result-panel\">\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n            <i class=\"material-icons prefix\" (click)=\"getBeers(search.value)\">search</i>\n            <input type=\"text\" #search name=\"search\" (keyup)=\"keyupGetBeers($event, search.value)\" />\n            <label for=\"icon_prefix\">Beer</label>\n            </div>\n        </div>\n      <p (click)=\"viewFavorites()\"> {{favorites.length}} Favorites</p>\n      <p>{{result.data.length}} Beers Found</p>\n      <div *ng-if=\"loading\" class=\"progress\">\n        <div class=\"indeterminate\"></div>\n      </div>\n          <ul class=\"collection\" >\n          <li class=\"collection-item avatar\" *ng-for=\"#item of result.data\" class=\"collection-item\">\n              <span class=\"title\">{{item.nameDisplay}}</span>\n              <p class=\"description\">{{item.description}}\n              </p>\n              <a (click)=\"saveBeer(item)\" class=\"secondary-content btn\"><i class=\"material-icons\">favorite</i></a>\n            </li>\n          </ul>\n      </article>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf, tooltip_1.Tooltip]
        }), 
        __metadata('design:paramtypes', [http_1.Http, beer_svc_1.BeerSvc])
    ], Beer);
    return Beer;
})();
exports.Beer = Beer;
//# sourceMappingURL=beer-comp.js.map