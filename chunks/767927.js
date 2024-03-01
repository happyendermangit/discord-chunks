function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "Δεν επιλέχθηκε το στοιχείο ".concat(e.item, "."),
        longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
        select: "Επιλογή",
        selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Δεν επιλέχθηκαν στοιχεία",
            one: () => "Επιλέχθηκε ".concat(t.number(e.count), " στοιχείο"),
            other: () => "Επιλέχθηκαν ".concat(t.number(e.count), " στοιχεία")
        }), "."),
        selectedItem: e => "Επιλέχθηκε το στοιχείο ".concat(e.item, ".")
    }
}