function(e, t, n) {
    "use strict";
    n("854508"), n("781738"), e.exports = function(e, t, n, r, a) {
        this.directMap[e + ":" + n] = t;
        var i, o = (e = e.replace(/\s+/g, " ")).split(" ");
        if (o.length > 1) {
            this.bindSequence(e, o, t, n);
            return
        }
        i = this.getKeyInfo(e, n), this.callbacks[i.key] = this.callbacks[i.key] || [], this.getMatches(i.key, i.modifiers, {
            type: i.action
        }, r, e, a), this.callbacks[i.key][r ? "unshift" : "push"]({
            callback: t,
            modifiers: i.modifiers,
            action: i.action,
            seq: r,
            level: a,
            combo: e
        })
    }
}