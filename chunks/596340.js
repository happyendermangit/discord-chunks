function(t, r, n) {
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var Symbol = n("330206"),
        Uint8Array = n("474211"),
        e = n("561662"),
        o = n("556459"),
        i = n("218282"),
        u = n("531217"),
        c = Symbol ? Symbol.prototype : void 0,
        a = c ? c.valueOf : void 0;
    t.exports = function(t, r, n, c, f, s, p) {
        switch (n) {
            case "[object DataView]":
                if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) break;
                t = t.buffer, r = r.buffer;
            case "[object ArrayBuffer]":
                if (t.byteLength != r.byteLength || !s(new Uint8Array(t), new Uint8Array(r))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return e(+t, +r);
            case "[object Error]":
                return t.name == r.name && t.message == r.message;
            case "[object RegExp]":
            case "[object String]":
                return t == r + "";
            case "[object Map]":
                var v = i;
            case "[object Set]":
                var l = 1 & c;
                if (v || (v = u), t.size != r.size && !l) break;
                var h = p.get(t);
                if (h) return h == r;
                c |= 2, p.set(t, r);
                var _ = o(v(t), v(r), c, f, s, p);
                return p.delete(t), _;
            case "[object Symbol]":
                if (a) return a.call(t) == a.call(r)
        }
        return !1
    }
}