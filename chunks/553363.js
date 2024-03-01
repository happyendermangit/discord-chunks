function(e, t, n) {
    n("70102"), n("222007");
    var r = Object.prototype.hasOwnProperty;

    function a(e) {
        if (!(this instanceof a)) throw TypeError("Constructor PseudoMap requires 'new'");
        if (this.clear(), e) {
            if (e instanceof a || "function" == typeof Map && e instanceof Map) e.forEach(function(e, t) {
                this.set(t, e)
            }, this);
            else if (Array.isArray(e)) e.forEach(function(e) {
                this.set(e[0], e[1])
            }, this);
            else throw TypeError("invalid argument")
        }
    }

    function i(e, t) {
        return e === t || e != e && t != t
    }

    function o(e, t, n) {
        this.key = e, this.value = t, this._index = n
    }

    function s(e, t) {
        for (var n = 0, a = "_" + t, o = a; r.call(e, o); o = a + n++)
            if (i(e[o].key, t)) return e[o]
    }
    e.exports = a, a.prototype.forEach = function(e, t) {
        t = t || this, Object.keys(this._data).forEach(function(n) {
            "size" !== n && e.call(t, this._data[n].value, this._data[n].key)
        }, this)
    }, a.prototype.has = function(e) {
        return !!s(this._data, e)
    }, a.prototype.get = function(e) {
        var t = s(this._data, e);
        return t && t.value
    }, a.prototype.set = function(e, t) {
        (function(e, t, n) {
            for (var a = 0, s = "_" + t, c = s; r.call(e, c); c = s + a++)
                if (i(e[c].key, t)) {
                    e[c].value = n;
                    return
                } e.size++, e[c] = new o(t, n, c)
        })(this._data, e, t)
    }, a.prototype.delete = function(e) {
        var t = s(this._data, e);
        t && (delete this._data[t._index], this._data.size--)
    }, a.prototype.clear = function() {
        var e = Object.create(null);
        e.size = 0, Object.defineProperty(this, "_data", {
            value: e,
            enumerable: !1,
            configurable: !0,
            writable: !1
        })
    }, Object.defineProperty(a.prototype, "size", {
        get: function() {
            return this._data.size
        },
        set: function(e) {},
        enumerable: !0,
        configurable: !0
    }), a.prototype.values = a.prototype.keys = a.prototype.entries = function() {
        throw Error("iterators are not implemented in this version")
    }
}