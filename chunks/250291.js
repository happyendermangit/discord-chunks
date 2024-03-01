function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "제안 사항 표시",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), "개 옵션"),
            other: () => "".concat(t.number(e.optionCount), "개 옵션")
        }), "을 사용할 수 있습니다."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "입력한 그룹 ".concat(e.groupTitle, ", ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), "개 옵션"),
                other: () => "".concat(t.number(e.groupCount), "개 옵션")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", 선택됨",
            other: ""
        }, e.isSelected)),
        listboxLabel: "제안",
        selectedAnnouncement: e => "".concat(e.optionText, ", 선택됨")
    }
}