function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNodeClientOffset: function() {
            return i
        },
        getEventClientOffset: function() {
            return o
        },
        getDragPreviewOffset: function() {
            return s
        }
    });
    var r = n("219999"),
        a = n("908834");

    function i(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
            r = n.top;
        return {
            x: n.left,
            y: r
        }
    }

    function o(e) {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }

    function s(e, t, n, o, s) {
        var c, l, u, d, p, f, m, h, v, g = "IMG" === (c = t).nodeName && ((0, r.isFirefox)() || !(null !== (l = document.documentElement) && void 0 !== l && l.contains(c))),
            y = i(g ? e : t),
            b = {
                x: n.x - y.x,
                y: n.y - y.y
            },
            x = e.offsetWidth,
            S = e.offsetHeight,
            w = o.anchorX,
            D = o.anchorY;
        var C = (u = g, d = t, p = x, f = S, m = u ? d.width : p, h = u ? d.height : f, (0, r.isSafari)() && u && (h /= window.devicePixelRatio, m /= window.devicePixelRatio), {
                dragPreviewWidth: m,
                dragPreviewHeight: h
            }),
            k = C.dragPreviewWidth,
            P = C.dragPreviewHeight,
            E = s.offsetX,
            T = s.offsetY;
        return {
            x: 0 === E || E ? E : new a.MonotonicInterpolant([0, .5, 1], [b.x, b.x / x * k, b.x + k - x]).interpolate(w),
            y: 0 === T || T ? T : (v = new a.MonotonicInterpolant([0, .5, 1], [b.y, b.y / S * P, b.y + P - S]).interpolate(D), (0, r.isSafari)() && g && (v += (window.devicePixelRatio - 1) * P), v)
        }
    }
}