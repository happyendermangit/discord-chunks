function(e, t, n) {
    "use strict";

    function r(e) {
        var t = null;
        return function() {
            return null == t && (t = e()), t
        }
    }

    function a(e, t) {
        return e.filter(function(e) {
            return e !== t
        })
    }

    function i(e, t) {
        var n = new Set,
            r = function(e) {
                return n.add(e)
            };
        e.forEach(r), t.forEach(r);
        var a = [];
        return n.forEach(function(e) {
            return a.push(e)
        }), a
    }
    n.r(t), n.d(t, {
        memoize: function() {
            return r
        },
        without: function() {
            return a
        },
        union: function() {
            return i
        }
    }), n("222007"), n("424973")
}