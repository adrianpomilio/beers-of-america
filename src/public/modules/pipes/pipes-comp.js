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
var PipeCmp = (function () {
    function PipeCmp() {
        this.message1 = 'Pipe Dreams 1';
        this.message2 = Date.now();
        this.message3 = ['I', 'love', 'to', 'use', 'p', 'tags', 'and', 'div', 'tags', 'because', 'my', 'friend', 'Steven', 'hates', 'that', 'crap', ',and somewhere Baby Chris is laughing!'];
    }
    PipeCmp = __decorate([
        angular2_1.Component({
            selector: 'pipe-dreams'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n        <div class=\"card-panel\">\n        <h3>Pipes</h3>\n        <p>{{ message1 | uppercase }} - uppercase pipe</p>\n        <p>This is Date.now(): {{ message2 }} but check this out {{ message2 | date: 'shortTime' }}</p>\n        <p><i *ng-for=\"#item of message3\">{{item}} </i></p>\n        <p *ng-for=\"#item of message3 | limitTo: 6\">{{item}}</p>\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PipeCmp);
    return PipeCmp;
})();
exports.PipeCmp = PipeCmp;
//# sourceMappingURL=pipes-comp.js.map