function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "显示建议",
        countAnnouncement: (e, t) => "有 ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " 个选项"),
            other: () => "".concat(t.number(e.optionCount), " 个选项")
        }), "可用。"),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "进入了 ".concat(e.groupTitle, " 组，其中有 ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " 个选项"),
                other: () => "".concat(t.number(e.groupCount), " 个选项")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", 已选择",
            other: ""
        }, e.isSelected)),
        listboxLabel: "建议",
        selectedAnnouncement: e => "".concat(e.optionText, ", 已选择")
    }
}