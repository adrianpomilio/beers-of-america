var State = (function () {
    function State(abbr, name, d, selected) {
        if (selected === void 0) { selected = false; }
        this.abbr = abbr;
        this.name = name;
        this.d = d;
        this.selected = selected;
    }
    State.prototype.selectState = function () {
        this.selected = true;
        return false;
    };
    return State;
})();
exports.State = State;
//# sourceMappingURL=State.js.map