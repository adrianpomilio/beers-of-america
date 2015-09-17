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
var Map_1 = require('modules/states/Map');
var State = (function () {
    function State(http) {
        var _this = this;
        this.result = [{ name: 'hello' }];
        http.get('/states').toRx().subscribe(function (res) { return _this.result = res.json(); });
    }
    State = __decorate([
        angular2_1.Component({
            selector: 'state-list'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, Map_1.MapCmp],
            template: "\n    <article class=\"card-panel\" >\n        <h2>States</h2>\n            <ul class=\"collection\">\n              <li *ng-for=\"#item of result\" id=\"state-{{item.abbr}}\" class=\"collection-item\" >\n                  {{item.name}}\n              </li>\n          </ul>\n      </article>\n      <map clas=\"card-panel\" [data]=\"result\"></map>\n\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], State);
    return State;
})();
exports.State = State;
