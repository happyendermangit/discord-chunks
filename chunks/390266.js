function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    });
    var n = r("604676");

    function i(e) {
        return e === Object(e) && 0 !== Object.keys(e).length
    }
    var o = function(e, t) {
        var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (i(t) && "function" == typeof t.behavior) return t.behavior(r ? (0, n.default)(e, t) : []);
        if (r) {
            var o, a = !1 === (o = t) ? {
                block: "end",
                inline: "nearest"
            } : i(o) ? o : {
                block: "start",
                inline: "nearest"
            };
            return function(e, t) {
                void 0 === t && (t = "auto");
                var r = "scrollBehavior" in document.body.style;
                e.forEach(function(e) {
                    var n = e.el,
                        i = e.top,
                        o = e.left;
                    n.scroll && r ? n.scroll({
                        top: i,
                        left: o,
                        behavior: t
                    }) : (n.scrollTop = i, n.scrollLeft = o)
                })
            }((0, n.default)(e, a), a.behavior)
        }
    }
}