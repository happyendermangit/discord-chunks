function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "顯示建議",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " 選項"),
            other: () => "".concat(t.number(e.optionCount), " 選項")
        }), " 可用。"),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "輸入的群組 ".concat(e.groupTitle, ", 有 ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " 選項"),
                other: () => "".concat(t.number(e.groupCount), " 選項")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", 已選取",
            other: ""
        }, e.isSelected)),
        listboxLabel: "建議",
        selectedAnnouncement: e => "".concat(e.optionText, ", 已選取")
    }
}