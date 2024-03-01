function(e, t, n) {
    n("70102"), n("424973"), t.parse = function(e, t) {
        if ("string" != typeof e) throw TypeError("argument str must be a string");
        var n = {},
            a = e.split(o),
            i = (t || {}).decode || r;
        return a.forEach(function(e) {
            var t = e.indexOf("=");
            if (!(t < 0)) {
                var r = e.substr(0, t).trim(),
                    a = e.substr(++t, e.length).trim();
                '"' == a[0] && (a = a.slice(1, -1)), void 0 == n[r] && (n[r] = function(e, t) {
                    try {
                        return t(e)
                    } catch (t) {
                        return e
                    }
                }(a, i))
            }
        }), n
    }, t.serialize = function(e, t, n) {
        var r = n || {},
            o = r.encode || a;
        if (!i.test(e)) throw TypeError("argument name is invalid");
        var s = o(t);
        if (s && !i.test(s)) throw TypeError("argument val is invalid");
        var u = [e + "=" + s];
        if (null != r.maxAge) {
            var l = r.maxAge - 0;
            if (isNaN(l)) throw Error("maxAge should be a Number");
            u.push("Max-Age=" + Math.floor(l))
        }
        if (r.domain) {
            if (!i.test(r.domain)) throw TypeError("option domain is invalid");
            u.push("Domain=" + r.domain)
        }
        if (r.path) {
            if (!i.test(r.path)) throw TypeError("option path is invalid");
            u.push("Path=" + r.path)
        }
        return r.expires && u.push("Expires=" + r.expires.toUTCString()), r.httpOnly && u.push("HttpOnly"), r.secure && u.push("Secure"), r.firstPartyOnly && u.push("First-Party-Only"), u.join("; ")
    };
    var r = decodeURIComponent,
        a = encodeURIComponent,
        o = /; */,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
}