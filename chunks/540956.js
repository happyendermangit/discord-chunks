function(t, r, n) {
    n("222007");
    var DataView = n("864259"),
        Map = n("516863"),
        Promise = n("23588"),
        Set = n("892933"),
        WeakMap = n("445269"),
        e = n("33426"),
        o = n("6906"),
        i = "[object Map]",
        u = "[object Promise]",
        c = "[object Set]",
        a = "[object WeakMap]",
        f = "[object DataView]",
        s = o(DataView),
        p = o(Map),
        v = o(Promise),
        l = o(Set),
        h = o(WeakMap),
        _ = e;
    (DataView && _(new DataView(new ArrayBuffer(1))) != f || Map && _(new Map) != i || Promise && _(Promise.resolve()) != u || Set && _(new Set) != c || WeakMap && _(new WeakMap) != a) && (_ = function(t) {
        var r = e(t),
            n = "[object Object]" == r ? t.constructor : void 0,
            _ = n ? o(n) : "";
        if (_) switch (_) {
            case s:
                return f;
            case p:
                return i;
            case v:
                return u;
            case l:
                return c;
            case h:
                return a
        }
        return r
    }), t.exports = _
}