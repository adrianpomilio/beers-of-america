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
var angular2_2 = require('angular2/angular2');
var FilterTextComponent = (function () {
    function FilterTextComponent() {
        this.filter = null;
        this.changed = new angular2_1.EventEmitter();
    }
    FilterTextComponent.prototype.onChanges = function (changes) {
        console.log(changes);
    };
    FilterTextComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.next(this.filter);
    };
    FilterTextComponent = __decorate([
        angular2_1.Component({
            selector: 'filter-text',
            events: ['changed'],
            properties: ['text']
        }),
        angular2_1.View({
            template: "\n    <form>\n         Filter:\n         <input type=\"text\"\n                [(ng-model)]=\"filter\"\n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  ",
            directives: [angular2_2.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterTextComponent);
    return FilterTextComponent;
})();
exports.FilterTextComponent = FilterTextComponent;
//# sourceMappingURL=Filter.js.map