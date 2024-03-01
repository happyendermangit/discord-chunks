function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " לא נבחר."),
        longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
        select: "בחר",
        selectedAll: "כל הפריטים נבחרו.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "לא נבחרו פריטים",
            one: () => "פריט ".concat(t.number(e.count), " נבחר"),
            other: () => "".concat(t.number(e.count), " פריטים נבחרו")
        }), "."),
        selectedItem: e => "".concat(e.item, " נבחר.")
    }
}