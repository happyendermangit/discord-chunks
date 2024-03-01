function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        buttonLabel: "Προβολή προτάσεων",
        countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
            one: () => "".concat(t.number(e.optionCount), " επιλογή"),
            other: () => "".concat(t.number(e.optionCount), " επιλογές ")
        }), " διαθέσιμες."),
        focusAnnouncement: (e, t) => "".concat(t.select({
            true: () => "Εισαγμένη ομάδα ".concat(e.groupTitle, ", με ").concat(t.plural(e.groupCount, {
                one: () => "".concat(t.number(e.groupCount), " επιλογή"),
                other: () => "".concat(t.number(e.groupCount), " επιλογές")
            }), ". "),
            other: ""
        }, e.isGroupChange)).concat(e.optionText).concat(t.select({
            true: ", επιλεγμένο",
            other: ""
        }, e.isSelected)),
        listboxLabel: "Προτάσεις",
        selectedAnnouncement: e => "".concat(e.optionText, ", επιλέχθηκε")
    }
}