function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DevToolsListener: function() {
            return o
        }
    });
    var i, r, s = n("836560");
    (i = r || (r = {})).VERTICAL = "vertical", i.HORIZONTAL = "horizontal";
    let a = {
        open: !1,
        orientation: null
    };
    class o extends s.EventEmitter {
        get orientations() {
            return Object.values(r)
        }
        get state() {
            return a
        }
        check() {
            let e = function() {
                    try {
                        return window.outerWidth - window.innerWidth
                    } catch (e) {
                        return 0
                    }
                }() > 160,
                t = function() {
                    try {
                        return window.outerHeight - window.innerHeight
                    } catch (e) {
                        return 0
                    }
                }() > 160,
                n = e ? "vertical" : "horizontal";
            if (!(t && e) && (function() {
                    try {
                        return window.Firebug.chrome.isInitialized
                    } catch (e) {
                        return !1
                    }
                }() || e || t)) {
                let e = a.open;
                a = {
                    open: !0,
                    orientation: n
                }, (!e || a.orientation !== n) && this.emit("changed", a)
            } else a.open && (a.open = !1, this.emit("changed", a))
        }
        constructor() {
            super(), setInterval(() => this.check(), 500)
        }
    }
}