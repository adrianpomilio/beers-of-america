var FilterService = (function () {
    function FilterService() {
    }
    FilterService.prototype.filter = function (data, props, originalList) {
        /* let is a keyword that allows for block level scoping unlike var which is function or global */
        var filteredList;
        if (data && props && originalList) {
            data = data.toLowerCase();
            var filtered = originalList.filter(function (item) {
                var match = false;
                for (var _i = 0; _i < props.length; _i++) {
                    var prop = props[_i];
                    if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            filteredList = filtered;
        }
        else {
            filteredList = originalList;
        }
        return filteredList;
    };
    return FilterService;
})();
exports.FilterService = FilterService;
//# sourceMappingURL=FilterService.js.map