function(e, t, r) {
    var Symbol = r("506264"),
        n = r("754892"),
        i = r("19797"),
        o = Symbol ? Symbol.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? n(e) : i(e)
    }
}