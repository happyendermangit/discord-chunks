function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OptionsReader: function() {
            return o
        }
    }), n("70102");

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = function() {
        var e, t, n;

        function o(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), i(this, "ownerDocument", null), i(this, "globalContext", void 0), i(this, "optionsArgs", void 0), this.globalContext = e, this.optionsArgs = t
        }
        return e = o, t = [{
            key: "window",
            get: function() {
                return this.globalContext ? this.globalContext : "undefined" != typeof window ? window : void 0
            }
        }, {
            key: "document",
            get: function() {
                var e;
                return null !== (e = this.globalContext) && void 0 !== e && e.document ? this.globalContext.document : this.window ? this.window.document : void 0
            }
        }, {
            key: "rootElement",
            get: function() {
                var e;
                return (null === (e = this.optionsArgs) || void 0 === e ? void 0 : e.rootElement) || this.window
            }
        }], r(e.prototype, t), n && r(e, n), o
    }()
}