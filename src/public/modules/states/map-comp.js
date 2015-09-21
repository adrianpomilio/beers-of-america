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
var MapCmp = (function () {
    function MapCmp() {
    }
    MapCmp.prototype.stateDetail = function (state) {
        console.log(state);
    };
    MapCmp = __decorate([
        angular2_1.Component({
            selector: 'map-view',
            properties: ['data']
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n    <div class=\"card-panel map-panel\">\n        hello states {{data.length}}\n        <svg id=\"usa-map\">\n            <g *ng-for=\"#st of data\" class=\"state\">\n                <path [attr.d]=\"st.d\" (click)=\"stateDetail(st)\"></path>\n            </g>\n        </svg>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MapCmp);
    return MapCmp;
})();
exports.MapCmp = MapCmp;
//# sourceMappingURL=map-comp.js.map