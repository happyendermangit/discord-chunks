function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = r("%Object.preventExtensions%", !0),
        n = r("%Object.isExtensible%", !0),
        c = s("226797");
    t.exports = i ? function(t) {
        return !c(t) && n(t)
    } : function(t) {
        return !c(t)
    }
}