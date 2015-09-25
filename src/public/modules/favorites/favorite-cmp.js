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
var FavoriteCmp = (function () {
    function FavoriteCmp() {
        this.favorite = new angular2_1.EventEmitter();
        this.counter = 0;
    }
    FavoriteCmp.prototype.onFavorite = function () {
        this.favorite.next(this.data);
        this.counter = ++this.counter;
    };
    FavoriteCmp = __decorate([
        angular2_1.Component({
            selector: 'favorite-btn',
            events: ['favorite'],
            properties: ['data']
        }),
        angular2_1.View({
            template: "\n            <a (click)=\"onFavorite()\" class=\"secondary-content btn\">\n                <i class=\"material-icons\">favorite</i>\n                {{counter}}\n            </a>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], FavoriteCmp);
    return FavoriteCmp;
})();
exports.FavoriteCmp = FavoriteCmp;
//# sourceMappingURL=favorite-cmp.js.map