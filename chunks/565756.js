function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Prikaži predloge",
        countAnnouncement: (e, t) => "Dostupno još: ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opcija"),
            other: () => "".concat(t.number(e.optionCount), " opcije/a")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Unesena grupa ".concat(e.groupTitle, ", s ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opcijom"),
                other: () => "".concat(t.number(e.groupCount), " optione/a")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", izabranih",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Predlozi",
        selectedAnnouncement: e => "".concat(e.optionText, ", izabrano")
    }
}