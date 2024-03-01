function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        focus: function() {
            return o
        },
        hidden: function() {
            return d
        },
        resized: function() {
            return l
        },
        fullscreenChange: function() {
            return f
        },
        visibilityChange: function() {
            return _
        },
        init: function() {
            return c
        },
        unload: function() {
            return g
        }
    });
    var s = n("917351"),
        i = n("913144"),
        r = n("563680"),
        a = n("816454");

    function o(e, t) {
        i.default.dispatch({
            type: "WINDOW_FOCUS",
            windowId: (0, a.getWindowId)(e),
            focused: t
        })
    }

    function d(e) {
        i.default.dispatch({
            type: "WINDOW_HIDDEN",
            windowId: (0, a.getWindowId)(e)
        })
    }
    let u = (0, s.memoize)(e => (0, s.debounce)((t, n) => {
        i.default.dispatch({
            type: "WINDOW_RESIZED",
            windowId: e,
            width: t,
            height: n
        })
    }, 100));

    function l(e) {
        let t = (0, a.getWindowId)(e),
            n = u(t);
        n(e.innerWidth, e.innerHeight)
    }

    function f(e) {
        let t = (0, a.getWindowId)(e);
        i.default.dispatch({
            type: "WINDOW_FULLSCREEN_CHANGE",
            windowId: t,
            isElementFullscreen: (0, r.isFullScreen)(null, e.document)
        })
    }

    function _(e) {
        let t = (0, a.getWindowId)(e);
        i.default.dispatch({
            type: "WINDOW_VISIBILITY_CHANGE",
            windowId: t,
            visible: "visible" === e.document.visibilityState
        })
    }

    function c(e) {
        let t = (0, a.getWindowId)(e),
            n = e.document;
        i.default.dispatch({
            type: "WINDOW_INIT",
            windowId: t,
            isElementFullscreen: (0, r.isFullScreen)(null, n),
            focused: n.hasFocus(),
            width: e.innerWidth,
            height: e.innerHeight,
            visible: "visible" === n.visibilityState
        })
    }

    function g(e) {
        i.default.dispatch({
            type: "WINDOW_UNLOAD",
            windowId: (0, a.getWindowId)(e)
        })
    }
}