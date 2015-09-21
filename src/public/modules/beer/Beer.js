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
var Beer = (function () {
    function Beer(http) {
        this.result = { data: [] };
        this.http = http;
    }
    Beer.prototype.getBeers = function (search) {
        var _this = this;
        console.log(search);
        this.http.get('/beers/' + search).toRx().subscribe(function (res) {
            console.log(res);
            _this.result = res.json();
        });
    };
    ;
    Beer = __decorate([
        angular2_1.Component({
            selector: 'beer-list'
        }),
        angular2_1.View({
            template: "\n      <article class=\"card-panel\">\n      <h2>Beers <span class=\"new badge\">{{result.data.length}}</span></h2>\n      <label>Get Some Beer:</label>\n      <input type=\"text\" #search name=\"search\" />\n      <button (click)=\"getBeers(search.value)\">go</button>\n          <ul class=\"collection\" >\n              <li *ng-for=\"#item of result.data\" class=\"collection-item\" [tooltip]=\"item.nameDisplay\">\n                  {{item.nameDisplay}}\n              </li>\n          </ul>\n      </article>\n    ",
            directives: [angular2_1.NgFor, tooltip_1.Tooltip]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Beer);
    return Beer;
})();
exports.Beer = Beer;
//# sourceMappingURL=Beer.js.map