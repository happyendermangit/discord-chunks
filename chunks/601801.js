function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        a: function() {
            return E
        }
    });
    var n = r("193809");

    function i() {
        throw Error("Cycle detected")
    }

    function o() {
        if (s > 1) s--;
        else {
            for (var e, t = !1; void 0 !== u;) {
                var r = u;
                for (u = void 0, l++; void 0 !== r;) {
                    var n = r.o;
                    if (r.o = void 0, r.f &= -3, !(8 & r.f) && h(r)) try {
                        r.c()
                    } catch (r) {
                        t || (e = r, t = !0)
                    }
                    r = n
                }
            }
            if (l = 0, s--, t) throw e
        }
    }
    r("70102"), r("274635");
    var a = void 0,
        u = void 0,
        s = 0,
        l = 0,
        c = 0;

    function d(e) {
        if (void 0 !== a) {
            var t = e.n;
            if (void 0 === t || t.t !== a) return t = {
                i: 0,
                S: e,
                p: a.s,
                n: void 0,
                t: a,
                e: void 0,
                x: void 0,
                r: t
            }, void 0 !== a.s && (a.s.n = t), a.s = t, e.n = t, 32 & a.f && e.S(t), t;
            if (-1 === t.i) return t.i = 0, void 0 !== t.n && (t.n.p = t.p, void 0 !== t.p && (t.p.n = t.n), t.p = a.s, t.n = void 0, a.s.n = t, a.s = t), t
        }
    }

    function f(e) {
        this.v = e, this.i = 0, this.n = void 0, this.t = void 0
    }
    f.prototype.h = function() {
        return !0
    }, f.prototype.S = function(e) {
        this.t !== e && void 0 === e.e && (e.x = this.t, void 0 !== this.t && (this.t.e = e), this.t = e)
    }, f.prototype.U = function(e) {
        if (void 0 !== this.t) {
            var t = e.e,
                r = e.x;
            void 0 !== t && (t.x = r, e.e = void 0), void 0 !== r && (r.e = t, e.x = void 0), e === this.t && (this.t = r)
        }
    }, f.prototype.subscribe = function(e) {
        var t = this;
        return function(e) {
            var t = new y(e);
            try {
                t.c()
            } catch (e) {
                throw t.d(), e
            }
            return t.d.bind(t)
        }(function() {
            var r = t.value,
                n = 32 & this.f;
            this.f &= -33;
            try {
                e(r)
            } finally {
                this.f |= n
            }
        })
    }, f.prototype.valueOf = function() {
        return this.value
    }, f.prototype.toString = function() {
        return this.value + ""
    }, f.prototype.toJSON = function() {
        return this.value
    }, f.prototype.peek = function() {
        return this.v
    }, Object.defineProperty(f.prototype, "value", {
        get: function() {
            var e = d(this);
            return void 0 !== e && (e.i = this.i), this.v
        },
        set: function(e) {
            if (a instanceof D && function() {
                    throw Error("Computed cannot have side-effects")
                }(), e !== this.v) {
                l > 100 && i(), this.v = e, this.i++, c++, s++;
                try {
                    for (var t = this.t; void 0 !== t; t = t.x) t.t.N()
                } finally {
                    o()
                }
            }
        }
    });

    function h(e) {
        for (var t = e.s; void 0 !== t; t = t.n)
            if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
        return !1
    }

    function p(e) {
        for (var t = e.s; void 0 !== t; t = t.n) {
            var r = t.S.n;
            if (void 0 !== r && (t.r = r), t.S.n = t, t.i = -1, void 0 === t.n) {
                e.s = t;
                break
            }
        }
    }

    function v(e) {
        for (var t = e.s, r = void 0; void 0 !== t;) {
            var n = t.p; - 1 === t.i ? (t.S.U(t), void 0 !== n && (n.n = t.n), void 0 !== t.n && (t.n.p = n)) : r = t, t.S.n = t.r, void 0 !== t.r && (t.r = void 0), t = n
        }
        e.s = r
    }

    function D(e) {
        f.call(this, void 0), this.x = e, this.s = void 0, this.g = c - 1, this.f = 4
    }

    function g(e) {
        var t = e.u;
        if (e.u = void 0, "function" == typeof t) {
            s++;
            var r = a;
            a = void 0;
            try {
                t()
            } catch (t) {
                throw e.f &= -2, e.f |= 8, C(e), t
            } finally {
                a = r, o()
            }
        }
    }

    function C(e) {
        for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
        e.x = void 0, e.s = void 0, g(e)
    }

    function m(e) {
        if (a !== this) throw Error("Out-of-order effect");
        v(this), a = e, this.f &= -2, 8 & this.f && C(this), o()
    }

    function y(e) {
        this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
    }(D.prototype = new f).h = function() {
        if (this.f &= -3, 1 & this.f) return !1;
        if ((36 & this.f) == 32 || (this.f &= -5, this.g === c)) return !0;
        if (this.g = c, this.f |= 1, this.i > 0 && !h(this)) return this.f &= -2, !0;
        var e = a;
        try {
            p(this), a = this;
            var t = this.x();
            (16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++)
        } catch (e) {
            this.v = e, this.f |= 16, this.i++
        }
        return a = e, v(this), this.f &= -2, !0
    }, D.prototype.S = function(e) {
        if (void 0 === this.t) {
            this.f |= 36;
            for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t)
        }
        f.prototype.S.call(this, e)
    }, D.prototype.U = function(e) {
        if (void 0 !== this.t && (f.prototype.U.call(this, e), void 0 === this.t)) {
            this.f &= -33;
            for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t)
        }
    }, D.prototype.N = function() {
        if (!(2 & this.f)) {
            this.f |= 6;
            for (var e = this.t; void 0 !== e; e = e.x) e.t.N()
        }
    }, D.prototype.peek = function() {
        if (this.h() || i(), 16 & this.f) throw this.v;
        return this.v
    }, Object.defineProperty(D.prototype, "value", {
        get: function() {
            1 & this.f && i();
            var e = d(this);
            if (this.h(), void 0 !== e && (e.i = this.i), 16 & this.f) throw this.v;
            return this.v
        }
    }), y.prototype.c = function() {
        var e = this.S();
        try {
            if (8 & this.f || void 0 === this.x) return;
            var t = this.x();
            "function" == typeof t && (this.u = t)
        } finally {
            e()
        }
    }, y.prototype.S = function() {
        1 & this.f && i(), this.f |= 1, this.f &= -9, g(this), p(this), s++;
        var e = a;
        return a = this, m.bind(this, e)
    }, y.prototype.N = function() {
        2 & this.f || (this.f |= 2, this.o = u, u = this)
    }, y.prototype.d = function() {
        this.f |= 8, 1 & this.f || C(this)
    };
    var E = class {
        setState(e) {
            this._prevState = this._state.value, this._state.value = e
        }
        subscribe(e) {
            return this._state.subscribe(t => e(t, this._prevState))
        }
        constructor(e) {
            (0, n._)(this, "_state", void 0), (0, n._)(this, "_prevState", void 0), this._prevState = e, this._state = new f(e)
        }
    }
}