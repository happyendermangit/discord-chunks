function(e, t, n) {
    "use strict";
    n("424973"), n("854508"), e.exports = function(e, t) {
        var r, a, i, o, s, c, l = [];
        for (i = 0, r = n("87552")(e), o = n("973809"), s = n("325688"), c = n("275750"); i < r.length; ++i) o[a = r[i]] && (a = o[a]), t && "keypress" !== t && s[a] && (a = s[a], l.push("shift")), c(a) && l.push(a);
        return t = this.pickBestAction(a, l, t), {
            key: a,
            modifiers: l,
            action: t
        }
    }
}