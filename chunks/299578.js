function(t, e, n) {
    var r = n("807419"),
        i = n("143283"),
        a = n("706627"),
        o = n("19235"),
        s = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        c = Function.prototype.toString,
        l = u.hasOwnProperty,
        d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!a(t) || i(t)) && (r(t) ? d : s).test(o(t))
    }
}