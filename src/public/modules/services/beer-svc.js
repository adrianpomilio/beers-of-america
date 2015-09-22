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
/* this is done to enforce TypeScript to emit metadata. This has no meaning other than to hack a solution */
var BeerSvc = (function () {
    function BeerSvc(http) {
        this.http = http;
    }
    BeerSvc.prototype.getBeers = function (searchText) {
        var _this = this;
        this.http.get('/beers/' + this.searchText).toRx().subscribe(function (res) {
            console.log(res);
            return _this.result = res.json();
        });
    };
    ;
    BeerSvc = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BeerSvc);
    return BeerSvc;
})();
exports.BeerSvc = BeerSvc;
//# sourceMappingURL=beer-svc.js.map