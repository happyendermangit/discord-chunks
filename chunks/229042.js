function(e, t, r) {
    r("70102");
    var n = r("478098"),
        u = r("952133");
    e.exports = function(e, t, r) {
        var a = !0,
            o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return u(r) && (a = "leading" in r ? !!r.leading : a, o = "trailing" in r ? !!r.trailing : o), n(e, t, {
            leading: a,
            maxWait: t,
            trailing: o
        })
    }
}