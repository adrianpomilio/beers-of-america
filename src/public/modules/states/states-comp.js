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
var map_comp_1 = require('modules/states/map-comp');
var StateCmp = (function () {
    function StateCmp(http, mapCmp) {
        var _this = this;
        this.result = [];
        this.selectedstate = {};
        this.mapper = mapCmp;
        http.get('/states').toRx().subscribe(function (res) {
            _this.result = res.json();
        });
    }
    StateCmp.prototype.showState = function (state) {
        this.selectedstate = state;
    };
    StateCmp = __decorate([
        angular2_1.Component({
            selector: 'state-list'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, map_comp_1.MapCmp],
            template: "\n    <article class=\"card-panel\" >\n        <h2>States</h2>\n        <div class=\"row\">\n            <div class=\"col s3\">\n                <div class=\"card-panel states-collection\">\n                    <ul class=\"collection \">\n                        <li *ng-for=\"#item of result\" class=\"collection-item\" (click)=\"showState(item)\" >\n                              {{item.name}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col s9\">\n                <map-view  [data]=\"result\" [selected-state]=\"selectedstate\"></map-view>\n            </div>\n        </div>\n    </article>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http, map_comp_1.MapCmp])
    ], StateCmp);
    return StateCmp;
})();
exports.StateCmp = StateCmp;
//# sourceMappingURL=states-comp.js.map