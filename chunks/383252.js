function(t, r, n) {
    "use strict";
    var e = n("418855");
    t.exports = function() {
        var t = e(this),
            r = "";
        return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r
    }
}