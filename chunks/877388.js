function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    (t = s(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    n("424973"), n("70102");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, s(r.key), r)
        }
    }

    function s(e) {
        var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }
    var a = n("446825").Buffer,
        c = n("482803").inspect,
        u = c && c.custom || "inspect";
    e.exports = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), this.head = null, this.tail = null, this.length = 0
        }
        return e = r, t = [{
            key: "push",
            value: function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }
        }, {
            key: "unshift",
            value: function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null, this.length = 0
            }
        }, {
            key: "join",
            value: function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                return n
            }
        }, {
            key: "concat",
            value: function(e) {
                if (0 === this.length) return a.alloc(0);
                for (var t, n, r, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0; o;) {
                    ;
                    t = o.data, n = i, r = s, a.prototype.copy.call(t, n, r), s += o.data.length, o = o.next
                }
                return i
            }
        }, {
            key: "consume",
            value: function(e, t) {
                var n;
                return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(e) {
                var t = this.head,
                    n = 1,
                    r = t.data;
                for (e -= r.length; t = t.next;) {
                    var i = t.data,
                        o = e > i.length ? i.length : e;
                    if (o === i.length ? r += i : r += i.slice(0, e), 0 == (e -= o)) {
                        o === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                        break
                    }++n
                }
                return this.length -= n, r
            }
        }, {
            key: "_getBuffer",
            value: function(e) {
                var t = a.allocUnsafe(e),
                    n = this.head,
                    r = 1;
                for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                    var i = n.data,
                        o = e > i.length ? i.length : e;
                    if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
                        o === i.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = i.slice(o));
                        break
                    }++r
                }
                return this.length -= r, t
            }
        }, {
            key: u,
            value: function(e, t) {
                return c(this, i(i({}, t), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }], o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), r
    }()
}