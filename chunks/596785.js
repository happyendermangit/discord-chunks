function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Rādīt ieteikumus",
        countAnnouncement: (e, t) => "Pieejamo opciju skaits: ".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " opcija"),
            other: () => "".concat(t.number(e.optionCount), " opcijas")
        }), "."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Ievadīta grupa ".concat(e.groupTitle, ", ar ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " opciju"),
                other: () => "".concat(t.number(e.groupCount), " opcijām")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", atlasīta",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Ieteikumi",
        selectedAnnouncement: e => "".concat(e.optionText, ", atlasīta")
    }
}