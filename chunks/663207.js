function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " nicht ausgew\xe4hlt."),
        longPressToSelect: "Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.",
        select: "Ausw\xe4hlen",
        selectedAll: "Alle Elemente ausgew\xe4hlt.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "Keine Elemente ausgew\xe4hlt",
            one: () => "".concat(t.number(e.count), " Element ausgew\xe4hlt"),
            other: () => "".concat(t.number(e.count), " Elemente ausgew\xe4hlt")
        }), "."),
        selectedItem: e => "".concat(e.item, " ausgew\xe4hlt.")
    }
}