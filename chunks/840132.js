function(e, t, r) {
    var Symbol = r("330206"),
        n = Symbol ? Symbol.prototype : void 0,
        i = n ? n.valueOf : void 0;
    e.exports = function(e) {
        return i ? Object(i.call(e)) : {}
    }
}