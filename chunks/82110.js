function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Suggesties weergeven",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " optie"),
            other: () => "".concat(t.number(e.optionCount), " opties")
        }), " beschikbaar."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Groep ".concat(e.groupTitle, " ingevoerd met ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " optie"),
                other: () => "".concat(t.number(e.groupCount), " opties")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", geselecteerd",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Suggesties",
        selectedAnnouncement: e => "".concat(e.optionText, ", geselecteerd")
    }
}