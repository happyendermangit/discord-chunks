function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPointFromPosition: function() {
            return i
        }
    });
    var l = n("385887");

    function i(e, t, n, i) {
        var a, s;
        let r = 0;
        for (let a = 0; a < n.length; a++) {
            let s = n[a];
            if (null == s) continue;
            let o = r + s.length;
            if (i <= o) {
                let n = l.PathUtils.child(t, a),
                    s = l.EditorUtils.node(e, n)[0];
                if (l.TextUtils.isText(s)) return {
                    path: n,
                    offset: Math.min(Math.max(i - r, 0), s.text.length)
                }
            }
            r = o
        }
        let o = n.length - 1;
        return {
            path: l.PathUtils.child(t, o),
            offset: null !== (s = null === (a = n[o]) || void 0 === a ? void 0 : a.length) && void 0 !== s ? s : 0
        }
    }
}