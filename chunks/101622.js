function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Zobraziť n\xe1vrhy",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " možnosť"),
            other: () => "".concat(t.number(e.optionCount), " možnosti/-\xed")
        }), " k dispoz\xedcii."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Zadan\xe1 skupina ".concat(e.groupTitle, ", s ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " možnosťou"),
                other: () => "".concat(t.number(e.groupCount), " možnosťami")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", vybrat\xe9",
            other: ""
        }, e.isSelected)),
        listboxLabel: "N\xe1vrhy",
        selectedAnnouncement: e => "".concat(e.optionText, ", vybrat\xe9")
    }
}