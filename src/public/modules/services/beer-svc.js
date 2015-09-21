var Beers = (function () {
    function Beers(http) {
        this.http = http;
    }
    Beers.prototype.getBeers = function (searchText) {
        var _this = this;
        return this.http.get('/beers/' + this.searchText).toRx().subscribe(function (res) {
            console.log(res);
            _this.result = res.json();
        });
    };
    ;
    return Beers;
})();
exports.Beers = Beers;
//# sourceMappingURL=beer-svc.js.map