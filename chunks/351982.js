function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Показать предложения",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " параметр"),
            other: () => "".concat(t.number(e.optionCount), " параметров")
        }), " доступно."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Введенная группа ".concat(e.groupTitle, ", с ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " параметром"),
                other: () => "".concat(t.number(e.groupCount), " параметрами")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", выбранными",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Предложения",
        selectedAnnouncement: e => "".concat(e.optionText, ", выбрано")
    }
}